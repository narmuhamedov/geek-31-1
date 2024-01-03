import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './menu.module.css';


function Menu() {
  return (
    <ul>
      <li>
        <NavLink
          to="/"
          className={({isActive})=>isActive ? `${classes.active}` : ''}
        >Главная</NavLink>
      </li>
      <li>
        <NavLink
          to="/form"
          className={({isActive})=>isActive ? `${classes.active}` : ''}
        >Форм</NavLink>
      </li>
      <li>
        <NavLink
          to="/pokemon"
          className={({isActive})=>isActive ? `${classes.active}` : ''}
        >pokemon</NavLink>
      </li>
    </ul>
  );
}


export default Menu;