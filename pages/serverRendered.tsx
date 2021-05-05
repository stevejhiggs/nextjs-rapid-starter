import React from 'react';
import { Heading } from '@chakra-ui/react';
import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';

interface PageProperties {
  productList: string[];
}

const Page: NextPage<PageProperties> = (properties) => {
  return (
    <>
      <Head>
        <title>Server rendered page</title>
        <meta name="description" content="A page containing data retreived from the server" />
      </Head>

      <Heading as="h2">Server rendered page</Heading>

      <p>
        This page uses https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering to always have a set of page
        properties that render server side
      </p>

      <Heading as="h3">Server data</Heading>
      <ul>
        {properties.productList.map((product) => (
          <li key={product}>{product}</li>
        ))}
      </ul>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<PageProperties> = async (context) => {
  // code in here is guarenteed to run server side

  return {
    props: {
      productList: ['fish', 'chips', 'mushy peas']
    }
  };
};

export default Page;
