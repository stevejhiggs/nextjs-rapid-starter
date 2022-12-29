import React from 'react';
import Link from 'next/link';

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
    <li key={navElement.url} className="pb-1 px-1">
      <Link href={navElement.url}>{navElement.text}</Link>
    </li>
  ));
}

const Nav: React.FC = () => <ul>{mapLinkCollection(navUrls)}</ul>;

export default Nav;
