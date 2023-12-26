import React, { useState } from 'react';
import Todo from '../Todo/Todo';

const List = ({ tasks, handleDelete, handleEdit, handleDone }) => {
  const [currentEdit, setCurrentEdit] = useState(null); // Используем null для отслеживания открытого блока редактирования

  return (
    <div>
      {tasks.map(task => (
        <Todo
          key={task.id}
          task={task}
          handleDelete={handleDelete}
          handleEdit={(id, newText) => handleEdit(id, newText)} // Передаем ID и новый текст в обработчик редактирования
          handleSelectCurrent={setCurrentEdit}
          handleDone={handleDone}
          isEdit={currentEdit === task.id}
        />
      ))}
    </div>
  );
};

export default List;
