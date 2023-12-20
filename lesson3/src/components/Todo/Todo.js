import React from 'react';
import classes from './todo.module.css';


const Todo = ({task, handleDelete}) => {
  return (
    <div className={classes.todo}>
      <h5>{task.id}   {task.title}</h5>
      <button onClick={()=>{handleDelete(task.id)}}>Удалить</button>
    </div>
  );
};

export default Todo;