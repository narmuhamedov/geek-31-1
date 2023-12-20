import React from 'react';
import classes from './header.module.css';

function Header({navbar}) {
  console.log(navbar);
  return (
    <div className={classes.header}>
      {
        navbar.map((item, index)=> <p key={index}>{item}</p>)
      }
    </div>
  );
}


export default Header;