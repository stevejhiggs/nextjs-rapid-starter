import React from 'react';
import { Heading } from '@chakra-ui/react';
import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import Localised from '@src/Localised';

const Page: NextPage = () => {
  const { t } = useTranslation('localePage');

  return (
    <>
      <Head>
        <title>Localalised page</title>
        <meta name="description" content="a localised page" />
      </Head>
      <Heading as="h2">{t('localePage:heading')} - Static</Heading>
      <p>
        The heading above is done via translation. As the translations have to be injected into the page the page needs to implement either
        getServerSideProps or getStaticProps and have the translations passed in.
      </p>
      <p>As this page is statically generated the translations are injected at build time and a version of the page for each language is created.</p>
      <p>
        The languages supported as well as the default language is specified in the next.js config file and the language picked will default to the
        closest match to the users language settings.
      </p>
      <p>
        The locale system is pretty powerful and supports pretty much everything you would want from an i18n system. See{' '}
        <a href="https://github.com/isaachinman/next-i18next">here</a> for more details
      </p>
      <Heading as="h3">Locale aware routing</Heading>
      <p>
        Routing can be aware of language either at the sub-path or domain level. E.g the link to the Polish version of this page is{' '}
        <Link href="./staticPage" locale="pl">
          here
        </Link>
      </p>
      <p>
        You can find more info about localised routing <a href="https://nextjs.org/docs/advanced-features/i18n-routing">here</a>
      </p>
      <Localised />
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'localePage']))
  }
});

export default Page;
