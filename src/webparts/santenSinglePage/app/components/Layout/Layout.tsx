import * as React from 'react';

import Header from './Header/Header';
import Navigation from './Navigation/Navigation';
import classes from './Layout.module.scss';
import Footer from './Footer/Footer';
import CorporateCarousel from '../Corporate/CorporateCarousel';

interface ILayoutProps {}

const Layout: React.FC<ILayoutProps> = (props) => {
  return (
    <React.Fragment>
      <Header />
      <Navigation />
      <CorporateCarousel />

      <main className={classes.container}>
        <div className={classes.innerContainer}>{props.children}</div>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
