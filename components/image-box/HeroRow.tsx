import * as React from 'react';
import classes from './HeroRow.module.css';

const HeroRow: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className={classes.boxGrid}>{children}</div>;
};

export default HeroRow;
