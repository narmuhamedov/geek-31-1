import React from 'react';
import classes from './buttonAction.module.css';

const ButtonAction = ({ handleClick, type, task, children }) => {
    return (
        <div>
            <button className={classes[type]} onClick={()=>handleClick(task.id)}>
                {children}
            </button>
        </div>
    );
};

export default ButtonAction;
