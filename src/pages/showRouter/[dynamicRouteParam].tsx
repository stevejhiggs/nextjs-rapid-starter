import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import ShowRoute from '@/components/ShowRoute';

const Page: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dynamic route</title>
        <meta name="description" content="Shows how to interact with the router" />
      </Head>

      <h2>Dynamic routing</h2>

      <p>
        Pages and api endpoints both use next's <a href="https://nextjs.org/docs/routing/introduction">file based routing</a> feature and as such the
        path of the file corresponds to the path of the endpoint. E.g the file at <strong>pages/bob/fish.tsx</strong> serves the page{' '}
        <strong>/bob/fish</strong>.
      </p>
      <p>
        These paths can also contain parameters by enclosing a file or folder name in <strong>[]</strong> e.g the file at{' '}
        <strong>/pages/bob/[fishName]/bait</strong> will get served on a url of <strong>/pages/bob/perch/bait</strong> and the value{' '}
        <strong>perch</strong> will be put in the query variable <strong>fishName</strong>.
      </p>

      <h3>Interacting with the router</h3>

      <p>
        You can read route information from the <a href="https://nextjs.org/docs/api-reference/next/router">router</a>. This information includes:
      </p>
      <ul>
        <li>The full path</li>
        <li>Any route params - these become part of the query</li>
        <li>Any query string variables</li>
      </ul>

      <p>
        You can see an example of a component that reads from the router below. Feel free to alter the url of this page and see how it is affected.
      </p>

      <ShowRoute />
    </>
  );
};

export default Page;
