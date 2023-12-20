import React, { useState } from 'react';
import classes from './modal.module.css';
import Input from '../Input/Input';


const Modal = ({children, handleOpen}) => {
  const [inputValue, setInputValue] = useState('')
  console.log(inputValue);
  return (
    <>
      <div className={classes.modalWrapper}></div>
      <div className={classes.modalContent}>
        {children}
        <h1>{inputValue}</h1>
        <Input
          type='text'
          placeholder='Введите текст 121321'
          onChange={(event)=>setInputValue(event.target.value)}
        />
        <button onClick={handleOpen} className={classes.btn}>Закрыть</button>
      </div>
    </>
  );
};

export default Modal;
//rsc
//rsfa