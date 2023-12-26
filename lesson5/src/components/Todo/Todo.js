import React, {useState} from 'react';
import classes from './todo.module.css';
import Button from "../Button/Button";
import ButtonAction from "../ButtonAction/ButtonAction";

const Todo = ({task, handleDelete, handleEdit, handleDone, handleSelectCurrent, isEdit}) => {
    const [input, setInput] = useState(task.title);

    const handleSave = () => {
        handleEdit(task.id, input);
        handleSelectCurrent(null);
    };

    // const handleCancel = () => {
    //     handleSelectCurrent(null);
    // };

    const taskClasses = `${classes.todo} ${task.completed ? classes.completed : ''}`;

    const [newTitle, setNewTitle] = useState(task.title)

    if (isEdit) {
        return (
            <div>
                <input type="text" value={newTitle} onChange={event => setNewTitle(event.target.value)}/>
                <button onClick={() => {
                    handleEdit({
                        ...task, title: newTitle
                    })
                    handleSelectCurrent(null)
                }}>Сохранить
                </button>
                <button onClick={() => {
                    handleSelectCurrent(null)
                }}>Отмена
                </button>
            </div>
        );
    }



    return (
        <div className={taskClasses}>
            <h5>{task.id} {task.title}</h5>
            <ButtonAction
                type={'edit'}
                task={task}
                handleClick={handleSelectCurrent}
            >
                Редактировать
            </ButtonAction>

            <ButtonAction type={'done'} task={task} handleClick={handleDone}>
                Done
            </ButtonAction>

            <ButtonAction type={'delete'} handleClick={handleDelete} task={task}>
                Удалить
            </ButtonAction>
            {/*<button onClick={() => {*/}
            {/*    handleSelectCurrent(task.id)*/}
            {/*}}>Редактировать*/}
            {/*</button>*/}
            {/*<button onClick={() => {*/}
            {/*    handleDone(task.id)*/}
            {/*}}>Done*/}
            {/*</button>*/}
            {/*<button onClick={() => {*/}
            {/*    handleDelete(task.id)*/}
            {/*}}>Удалить*/}
            {/*</button>*/}
        </div>


    );
};

export default Todo;
