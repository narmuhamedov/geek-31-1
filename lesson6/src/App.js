import './App.css';
import UsersPage from './pages/usersPage/UsersPage';
import { useEffect, useState } from 'react';
import FormPage from './pages/formPage/FormPage';
import axios from 'axios';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './components/menu/Menu';
import Pokemon from './pages/Pokemon/Pokemon';


function App() {

  const [ users, setUsers ] = useState([]);


  const getUsersAxios = async() => {
    try {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
      return data;
    } catch(e) {
      console.log('Error', e.message);
    }
  };



  console.log('=======================', users);
  useEffect(() => {
    getUsersAxios().then((users)=>setUsers(users))
  }, []);

  return (
  <BrowserRouter>
    <Menu/>
    <Routes>
      <Route path='/' element={<UsersPage users={users}/>}/>
      <Route path='/form' element={<FormPage/>}/>
      <Route path='/pokemon' element={<Pokemon/>}/>
    </Routes>
  </BrowserRouter>
  );
}


export default App;