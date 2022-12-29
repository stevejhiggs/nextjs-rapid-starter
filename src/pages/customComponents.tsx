import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Counter from '@/components/Counter';
import CallApi from '@/components/CallApi';

const Page: NextPage = () => {
  return (
    <>
      <Head>
        <title>Custom components</title>
        <meta name="description" content="Shows how to use custom react components" />
      </Head>

      <h2>Custom components</h2>

      <h3>Counter</h3>

      <p>
        An example of using a custom component with interactivity. This component will be rendered server-side if the page is, then, when the page is
        shown to the user the client side elements will kick in and the component will be fully interactive.
      </p>

      <Counter />

      <h3>Call api</h3>

      <p>An example of calling the backend api.</p>

      <CallApi />
    </>
  );
};

export default Page;
