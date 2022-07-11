import * as React from 'react';
import classes from './TestimonyRow.module.css';

const TestimyRow: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className={classes.boxGrid}>{children}</div>;
};

export default TestimyRow;
