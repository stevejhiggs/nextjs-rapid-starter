import React from 'react';
import { Heading } from '@chakra-ui/react';
import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';

interface PageProperties {
  productList: string[];
}

const Page: NextPage<PageProperties> = (properties) => {
  return (
    <>
      <Head>
        <title>A statically generated page</title>
        <meta name="description" content="Generated at build time" />
      </Head>

      <Heading as="h2">Statically generated page</Heading>

      <p>This page uses https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation retrieve data at build time.</p>

      <Heading as="h3">Static data</Heading>
      <ul>
        {properties.productList.map((product) => (
          <li key={product}>{product}</li>
        ))}
      </ul>

      <p>
        Static generation can also generate multiple pages using a mail-merge like approach. See
        https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation for details
      </p>
    </>
  );
};

export const getStaticProps: GetStaticProps<PageProperties> = async () => {
  // code in here runs at build time

  return {
    props: {
      productList: ['fish', 'chips', 'mushy peas']
    }
  };
};

export default Page;
