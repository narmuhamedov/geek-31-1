import React, { useState } from 'react';
import classes from './todo.module.css';

const Todo = ({ task, handleDelete, handleEdit, handleDone, handleSelectCurrent, isEdit }) => {
  const [input, setInput] = useState(task.title);

  const handleSave = () => {
    handleEdit(task.id, input);
    handleSelectCurrent(null);
  };

  const handleCancel = () => {
    handleSelectCurrent(null);
  };

  const taskClasses = `${classes.todo} ${task.completed ? classes.completed : ''}`;

  if (isEdit) {
    return (
      <div>
        <input type="text" value={input} onChange={event => setInput(event.target.value)} />
        <button onClick={handleSave}>Сохранить</button>
        <button onClick={handleCancel}>Отмена</button>
      </div>
    );
  }

  return (
    <div className={taskClasses}>
      <h5>{task.id} {task.title}</h5>
      <button onClick={() => { handleSelectCurrent(task.id) }}>Редактировать</button>
      <button onClick={() => { handleDone(task.id) }}>Done</button>
      <button onClick={() => { handleDelete(task.id) }}>Удалить</button>
    </div>
  );
};

export default Todo;
