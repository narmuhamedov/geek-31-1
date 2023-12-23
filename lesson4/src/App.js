import './App.css';
import Modal from './components/Modal/Modal';
import {useState} from 'react';
import List from './components/List/List';
import Input from './components/Input/Input';


//log
function App() {
    const [show, setShow] = useState(false)
    const [newTask, setNewTask] = useState('')
    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: "HTML",
            completed: false
        },
        {
            id: 2,
            title: "CSS",
            completed: false
        },
        {
            id: 3,
            title: "JS",
            completed: false
        },
        {
            id: 4,
            title: "REACT",
            completed: false
        }
    ])
    const [searchTerm, setSearchTerm] = useState('');
    const handleOpen = () => {
        setShow(!show)
    }

    const handleTextInput = (event) => {
        setNewTask(event.target.value)
    }

    const handleAdd = () => {
        setTasks((prevState) => [...prevState, {
            id: tasks[tasks.length - 1].id + 1,
            title: newTask,
            completed: false
        }
        ])
    }

    const handleDelete = (id) => {
        const updatedTasks = tasks.filter(task => task.id !== id);
        setTasks(updatedTasks);
    }


    const handleEdit = (id, newText) => {
        const updatedTasks = tasks.map(task =>
            task.id === id ? {...task, title: newText} : task
        );
        setTasks(updatedTasks);
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

    return (
        <div className="App">
            <h1>Search element</h1>
            <Input name={'search'} onChange={handleSearch} value={searchTerm}/>
            <button className='btn' onClick={handleOpen}>Открыть</button>
            {show &&
                <Modal
                    handleOpen={handleOpen}
                    handleTextInput={handleTextInput}
                    handleAdd={handleAdd}
                />
            }
            <List tasks={tasks} handleDelete={handleDelete} handleEdit={handleEdit} handleDone={handleDone}/>
        </div>
    );
}


export default App;
