import React from 'react';

import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';

interface Properties {
  children: React.ReactNode;
}

const Layout: React.FC<Properties> = ({ children }) => {
  return (
    <>
      <header>
        <Header />
      </header>
      <div className="grid grid-flow-col auto-cols-max gap-4">
        <nav className="py-2">
          <Nav />
        </nav>
        <div className="prose py-2">{children}</div>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

/*
<Grid templateColumns="200px 1fr" templateRows="auto 1fr auto" gap="10px" height="100vh">
      <GridItem as="header" gridArea="1 / 1 / 2 / 6">
        <Header />
      </GridItem>

      <GridItem as="nav" gridArea="2 / 1 / 5 / 2">
        <Nav />
      </GridItem>

      <GridItem as="main" gridArea="2 / 2 / 5 / 6" className="prose">
        {children}
      </GridItem>

      <GridItem as="footer" gridArea="5 / 1 / 6 / 6">
        <Footer />
      </GridItem>
    </Grid>
    */

export default Layout;
