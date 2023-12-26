import './App.css';
import Modal from './components/Modal/Modal';
import {useEffect, useState} from 'react';
import List from './components/List/List';
import Input from './components/Input/Input';


//log
function App() {
    const [show, setShow] = useState(false)
    const [newTask, setNewTask] = useState('')
    const [tasks, setTasks] = useState([])
    const [searchTerm, setSearchTerm] = useState('');
    const handleOpen = () => {
        setShow(!show)
    }

    const handleTextInput = (event) => {
        setNewTask(event.target.value)
    }

    const handleAdd = () => {
        setTasks((prevState) => [...prevState, {
            id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
            title: newTask,
            completed: false
        }
        ])
    }

    const handleDelete = (id) => {
        const updatedTasks = tasks.filter(task => task.id !== id);
        setTasks(updatedTasks);
    }


    const handleEdit = (editTodo, newText) => {
        tasks.map(task => {
            if (task.id === editTodo.id) {
                return task.title = editTodo.title
            }
        })

        setTasks(tasks)
        // const updatedTasks = tasks.map(task =>
        //     task.id === id ? {...task, title: newText} : task
        // );
        // setTasks(updatedTasks);
    };


    const handleDone = (id) => {
        tasks.map(task => {
            if (task.id === id) {
                return task.completed = !task.completed
            }
            return tasks
        })
        setTasks([...tasks])
    }

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        const filteredTasks = tasks.filter((task) =>
            task.title.toLowerCase().includes(event.target.value.toLowerCase())
        );
        setTasks(filteredTasks);
    };

    useEffect(() => {
        const myLocalList = JSON.parse(localStorage.getItem('tasks'))
        if (myLocalList === null) {
            return localStorage.setItem('tasks', JSON.stringify(tasks))
        }
        if (myLocalList.length !== 0) {
            setTasks(myLocalList)
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks]);


    const handleClearTasks = () => {
        setTasks([]);
        localStorage.removeItem('tasks');
    };

    const [filterType, setFilterType] = useState('all');
    const handleFilterChange = (event) => {
        setFilterType(event.target.value);
    };

    const getFilteredTasks = () => {
        switch (filterType) {
            case 'completed':
                return tasks.filter(task => task.completed);
            case 'uncompleted':
                return tasks.filter(task => !task.completed);
            default:
                return tasks;
        }
    };

    return (
        <div className="App">
            <br/>
            <select  className="filter-select" value={filterType} onChange={handleFilterChange}>
                <option value="all">Все таски</option>
                <option value="completed">Выполненные</option>
                <option value="uncompleted">Не выполненные</option>
            </select>


            <h1>Search element</h1>
            <Input name={'search'} onChange={handleSearch} value={searchTerm}/>
            <button className='btn' onClick={handleOpen}>Открыть</button>
            <button className='btn-clear' onClick={handleClearTasks}>Очистить все таски</button>
            <br/>
            {show &&
                <Modal
                    handleOpen={handleOpen}
                    handleTextInput={handleTextInput}
                    handleAdd={handleAdd}
                />
            }
           <List tasks={getFilteredTasks()} handleDelete={handleDelete} handleEdit={handleEdit} handleDone={handleDone} />
        </div>
    );
}


export default App;
