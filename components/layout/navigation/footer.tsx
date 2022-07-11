import * as React from 'react';
import Link from 'next/Link';
import classes from './footer.module.css';
import Logo from './logo';

const Footer: React.FC = () => {
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
    <footer className={classes.footer}>
      <div className={classes.footerWrapper}>
        <Link href='/'>
          <a>
            <Logo isFooterLogo={true} />
          </a>
        </Link>
        <nav>
          <ul>
            {navRoutes.map(({ route, label }) => {
              return (
                <li key={`nav-li-${label}`}>
                  <Link href={route}>{label}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <div className={`${classes.footerWrapper} ${classes.footerWrapperLegal}`}>
        <div className={classes.footerWrapperLegalPrimary}>
          <p>Chamber of Commerce: 63464101 </p>
          <p>VAT: NL 8552.47.502.B01</p>
          <p>Terms and conditions</p>
        </div>
        <p>© 2022 Dept Agency</p>
      </div>
    </footer>
  );
};

export default Footer;
