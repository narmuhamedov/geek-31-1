import React, {useState} from 'react';
import UsersPage from "./pages/usersPage/UsersPage";
import FormPage from "./pages/formPage/FormPage";

function App(props) {

    const [users, setUsers] = useState([])

    const getUsers = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data=>setUsers(data))

    }

    return (
        <div>
            <h1>Lesson6</h1>
            <button onClick={getUsers}>get</button>
            <UsersPage users={users}/>
            <FormPage/>
        </div>
    );
}

export default App;