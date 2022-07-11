import * as React from 'react';
import Link from 'next/Link';
import Logo from './logo';
import classes from './main-navigation.module.css';

interface MainNavigationProps {
  navRoutes: { route: string; label: string }[];
}

const MainNavigation: React.FC<MainNavigationProps> = ({ navRoutes }) => {
  return (
    <header className={`${classes.header} ${classes.mainNavigation}`}>
      <Link href='/'>
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
          {navRoutes.map(({ route, label }) => {
            return (
              <li key={`nav-li-${label}`}>
                <Link role='navigation' href={route}>
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
