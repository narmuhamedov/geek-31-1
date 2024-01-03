import React, { useEffect, useState } from 'react';

const UsersPage = ({ usersProp }) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        setUsers(usersProp);
    }, [usersProp]);

    const getUser = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => response.json())
            .then(data => {
                // Обновляем состояние users с помощью функции setUsers
                setUsers(prevUsers => {
                    // Находим пользователя по id и обновляем его данные
                    const updatedUsers = prevUsers.map(user =>
                        user.id === id ? { ...user, ...data } : user
                    );
                    return updatedUsers;
                });
            })
            .catch(error => {
                console.error('Error fetching user:', error);
            });
    };

    return (
        <div>
            <ul>
                {users?.map(user =>
                    <li key={user.id}>
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                        <p>{user.phone}</p>
                        <button onClick={() => getUser(user.id)}>подробнее</button>
                        <p>================</p>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default UsersPage;
