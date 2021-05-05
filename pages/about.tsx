import React from 'react';
import { Heading } from '@chakra-ui/react';
import { NextPage } from 'next';
import Head from 'next/head';

const Page: NextPage = () => {
  return (
    <>
      <Head>
        <title>The about page</title>
        <meta name="description" content="about the site" />
      </Head>

      <Heading as="h2">About page</Heading>
      <p>I am the about page. This is just to illustrate what you need to make a simple page</p>
    </>
  );
};

export default Page;
