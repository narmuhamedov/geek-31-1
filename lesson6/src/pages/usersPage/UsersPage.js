import React, {useState} from 'react';

const UsersPage = ({users}) => {
    const [user, setUser] = useState({})
    const getUser = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => response.json())
            .then(data=>console.log(data))
    }
    return (
        <div>
            <ul>
                {
                    users.map(user =>
                        <li key={user.id}>
                            <p>{user.name}</p>
                            <p>{user.email}</p>
                            <p>{user.phone}</p>
                            <button onClick={()=> getUser(user.id)}>подробнее</button>
                            <p>================</p>
                        </li>
                    )
                }
            </ul>
        </div>
    );
};

export default UsersPage;