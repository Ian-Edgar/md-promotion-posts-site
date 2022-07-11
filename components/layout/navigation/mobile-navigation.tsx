import * as React from 'react';
import Link from 'next/Link';
import Logo from './logo';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import classes from './main-navigation.module.css';
import { useState } from 'react';

interface MobileNavigationProps {
  navRoutes: { route: string; label: string }[];
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({ navRoutes }) => {
  const [burgerMenuIsOpen, setBurgerMenuIsOpen] = useState(false);

  const burgerMenuHandler = () => {
    return setBurgerMenuIsOpen(!burgerMenuIsOpen);
  };

  const closeBurgerMenuHander = () => {
    setBurgerMenuIsOpen(false);
  };

  return (
    <header className={`${classes.header} ${classes.mobileNavigation}`}>
      <Link href='/'>
        <a onClick={closeBurgerMenuHander}>
          <Logo />
        </a>
      </Link>
      <nav>
        {burgerMenuIsOpen && (
          <ul>
            {navRoutes.map(({ route, label }) => {
              return (
                <li onClick={closeBurgerMenuHander} key={`nav-li-${label}`}>
                  <Link role='navigation' href={route}>
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}

        {!burgerMenuIsOpen ? (
          <GiHamburgerMenu
            className={classes.hamburger}
            onClick={burgerMenuHandler}
            size='40px'
            color='white'
          />
        ) : (
          <AiOutlineClose
            className={classes.hamburger}
            onClick={burgerMenuHandler}
            size='40px'
            color='white'
          />
        )}
      </nav>
    </header>
  );
};

export default MobileNavigation;
