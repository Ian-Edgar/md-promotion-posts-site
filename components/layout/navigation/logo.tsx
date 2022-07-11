import * as React from 'react';
import classes from './logo.module.css';
import Image from 'next/image';

interface LogoProps {
  isFooterLogo?: boolean;
}

const Logo: React.FC<LogoProps> = ({ isFooterLogo }) => {
  return (
    <div className={`${classes.logo} ${isFooterLogo && classes.footerLogo}`}>
      <Image
        src='/dept-logo-white.svg'
        alt='Vercel Logo'
        width={88}
        height={25}
      />
    </div>
  );
};

Logo.defaultProps = {
  isFooterLogo: false,
};

export default Logo;
