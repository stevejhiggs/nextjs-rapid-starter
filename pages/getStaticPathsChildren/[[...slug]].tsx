import React from 'react';
import { Heading } from '@chakra-ui/react';
import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

interface PageProperties {
  id: string;
  slug: string[];
  title: string;
  buildTime?: string;
  locale?: string;
}

const pageMapping: PageProperties[] = [
  { id: 'blogArticleD', slug: ['blog', 'articles', 'A'], title: 'Blog Article A', locale: 'en' },
  { id: 'blogArticleE', slug: ['blog', 'articles', 'B'], title: 'Blog Article B', locale: 'pl' },
  { id: 'blogArticleF', slug: ['blog', 'articles', 'C'], title: 'Blog Article C in English', locale: 'en' },
  { id: 'blogArticleF', slug: ['blog', 'articles', 'C'], title: 'Blog Article C in Polish', locale: 'pl' }
];

const Page: NextPage<PageProperties> = ({ title, buildTime }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="dynamic page" />
      </Head>

      <Heading as="h2">{title}</Heading>
      <p>I am a dynamically created page built at {buildTime}</p>
      <p>
        This is an example of a page that uses GetStaticPaths to generate multiple pages. One difference between this and the generic GetStaticPaths
        example is that by using the dynamic page identifier \[\[...slug\]\] and a slug array we can generate children of children. Generated pages
        are:
      </p>
      <ul>{mapLinkCollection(pageMapping)}</ul>
    </>
  );
};

function mapLinkCollection(pages: PageProperties[]) {
  return pages.map((page) => (
    <li key={`${page.locale}_${page.id}`}>
      <Link href={`/getStaticPathsChildren/${page.slug.join('/')}`} locale={page.locale}>
        {page.title}
      </Link>
    </li>
  ));
}

export const getStaticProps: GetStaticProps<PageProperties> = async ({ params, locale }) => {
  // code in here runs at build time
  const pageInfo = pageMapping.find((x) => x.slug.join('/') === (params.slug as string[]).join('/') && x.locale === locale);

  if (!pageInfo) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      ...pageInfo,
      buildTime: new Date().toISOString()
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10 // In seconds
  };
};

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const paths: { params: any; locale: string }[] = [];

  // this could be an api call at this point
  const posts = pageMapping;

  // Get the paths we want to pre-render based on posts
  for (const post of posts) {
    paths.push({ params: { slug: post.slug }, locale: post.locale });
  }

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

export default Page;
