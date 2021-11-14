import React from 'react';
import Link from 'next/link';
import { Box, Link as ChakraLink } from '@chakra-ui/react';

interface NavElement {
  url: string;
  text: string;
}

const navUrls: NavElement[] = [
  {
    url: '/',
    text: 'Home'
  },
  {
    url: '/about',
    text: 'About'
  },
  {
    url: '/customComponents',
    text: 'Custom components'
  },
  {
    url: '/serverRendered',
    text: 'Server rendered'
  },
  {
    url: '/staticallyGenerated',
    text: 'Statically generated'
  },
  {
    url: '/showRouter/blahblahMadeUpValue',
    text: 'Dynamic route'
  },
  {
    url: '/i18n/staticPage',
    text: 'i18n - Static'
  },
  {
    url: '/i18n/serverRendered',
    text: 'i18n - Server rendered'
  },
  {
    url: '/getStaticPaths/blogArticleA',
    text: 'GetStaticPaths'
  },
  {
    url: '/getStaticPathsChildren/blog/articles/A',
    text: 'GetStaticPaths - Nested'
  }
];

function mapLinkCollection(links: NavElement[]) {
  return links.map((navElement) => (
    <Box as="li" key={navElement.url} paddingBottom="0.5rem" paddingLeft="0.5rem">
      <Link href={navElement.url} passHref>
        <ChakraLink>{navElement.text}</ChakraLink>
      </Link>
    </Box>
  ));
}

const Nav: React.FC = () => <Box as="ul">{mapLinkCollection(navUrls)}</Box>;

export default Nav;
