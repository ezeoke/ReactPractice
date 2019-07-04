import React from 'react';
import {  NavLink } from 'react-router-dom'
import './component.css'; 

function Header(){
 return (
   <header>
     <h1>Practicing React Router</h1>
     <NavLink to='/' activeClassName='is-active' exact={true}>Home</NavLink>
     <NavLink to='/list' activeClassName='is-active'>Content Page</NavLink>
     <NavLink to='/edit' activeClassName='is-active'exact={true}>Articles</NavLink>
   </header>
 )
}

export default Header;