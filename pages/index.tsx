import React from 'react';
import Image from 'next/image';
import { Heading } from '@chakra-ui/react';
import { NextPage } from 'next';
import Head from 'next/head';

import SpiderImage from '../public/images/Peacock_Spider.jpg';

const Page: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home page</title>
        <meta name="description" content="The site home page" />
      </Head>

      <Heading as="h2">Homepage</Heading>

      <p>I am some nice paragraph content</p>

      <Heading as="h2">Assets</Heading>

      <p>Assets such as images can just be added to the /public directory</p>

      <Image src={SpiderImage} alt="spider" />
    </>
  );
};

export default Page;
