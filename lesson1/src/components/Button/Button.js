import React from 'react';
import classes from './button.module.css';


const Button = ({children}) => {
  return (
    <div className={classes.container}>
      <button className={classes.btn}>{children}</button>
    </div>
  );
};

export default Button;