import React from 'react';
import { Heading } from '@chakra-ui/react';
import { NextPage } from 'next';
import Head from 'next/head';
import Counter from '@src/Counter';
import CallApi from '@src/CallApi';

const Page: NextPage = () => {
  return (
    <>
      <Head>
        <title>Custom components</title>
        <meta name="description" content="Shows how to use custom react components" />
      </Head>

      <Heading as="h2">Custom components</Heading>

      <Heading as="h3">Counter</Heading>

      <p>
        An example of using a custom component with interactivity. This component will be rendered server-side if the page is, then, when the page is
        shown to the user the client side elements will kick in and the component will be fully interactive.
      </p>

      <Counter />

      <Heading as="h3">Call api</Heading>

      <p>An example of calling the backend api.</p>

      <CallApi />
    </>
  );
};

export default Page;
