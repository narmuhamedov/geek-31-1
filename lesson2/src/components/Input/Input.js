import React from 'react';
import classes from './input.module.css';


const Input = ({type='text', placeholder, onChange}) => {
  return (
    <input
      className={classes.input}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;