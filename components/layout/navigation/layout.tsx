import * as React from 'react';
import { Fragment } from 'react';
import MainNavigation from './main-navigation';
import MobileNavigation from './mobile-navigation';
import Footer from './footer';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const navRoutes = [
    {
      route: '/',
      label: 'WORK',
    },
    {
      route: '/',
      label: 'CULTURE',
    },
    {
      route: '/',
      label: 'SERVICES',
    },
    {
      route: '/',
      label: 'INSIGHTS',
    },
    {
      route: '/',
      label: 'CAREERS',
    },
    {
      route: '/contact',
      label: 'CONTACT',
    },
  ];
  return (
    <Fragment>
      <MainNavigation navRoutes={navRoutes} />
      <MobileNavigation navRoutes={navRoutes} />
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
