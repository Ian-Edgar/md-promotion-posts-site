import * as React from 'react';
import classes from './ClientNote.module.css';

const ClientNote: React.FC = () => {
  return (
    <div className={classes.boxFlex}>
      <div>
        <h5>MICROSOFT</h5>
        <p>
          Tapping into Ireland’s unique gaming culture and bringing a fresh
          flavour to their Xbox social media channels
        </p>
        <button>Read More</button>
      </div>
    </div>
  );
};

export default ClientNote;
