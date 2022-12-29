import React from 'react';
import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

interface PageProperties {
  id: string;
  title: string;
  buildTime?: string;
  locale?: string;
}

const pageMapping: PageProperties[] = [
  { id: 'blogArticleA', title: 'Blog Article A', locale: 'en' },
  { id: 'blogArticleB', title: 'Blog Article B', locale: 'pl' },
  { id: 'blogArticleC', title: 'Blog Article C in English', locale: 'en' },
  { id: 'blogArticleC', title: 'Blog Article C in Polish', locale: 'pl' }
];

const Page: NextPage<PageProperties> = ({ title, buildTime }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="dynamic page" />
      </Head>

      <h2>{title}</h2>
      <p>I am a dynamically created page built at {buildTime}</p>
      <p>This is an example of a page that uses GetStaticPaths to generate multiple pages. Generated pages are:</p>
      <ul>{mapLinkCollection(pageMapping)}</ul>
    </>
  );
};

function mapLinkCollection(pages: PageProperties[]) {
  return pages.map((page) => (
    <li key={`${page.locale}_${page.id}`}>
      <Link href={`/getStaticPaths/${page.id}`} locale={page.locale}>
        {page.title}
      </Link>
    </li>
  ));
}

export const getStaticProps: GetStaticProps<PageProperties> = async ({ params, locale }) => {
  // code in here runs at build time
  const pageInfo = pageMapping.find((x) => x.id === params.id && x.locale === locale);

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

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: { params: any; locale: string }[] = [];

  // this could be an api call at this point
  const posts = pageMapping;

  // Get the paths we want to pre-render based on posts
  for (const post of posts) {
    paths.push({ params: { id: post.id }, locale: post.locale });
  }

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

export default Page;
