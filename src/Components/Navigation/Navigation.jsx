import React from 'react';
import { NavLink } from 'react-router-dom';
import cls from './Navigation.module.css';

const Navigation =() =>{
    return <nav className={cls.nav}>
        <div className = {cls.item}>
            <NavLink to="/profile" activeClassName = {cls.active}>Profile</NavLink>
        </div>
        <div className = {cls.item}>
            <NavLink exact to="/dialogs" activeClassName = {cls.active}>Dialogs</NavLink>
        </div>
        <div className = {cls.item}>
            <NavLink to="/news" activeClassName = {cls.active}>News</NavLink>
        </div>
        <div className = {cls.item}>
            <NavLink to="/music" activeClassName = {cls.active}>Music</NavLink>
        </div>
        <div className = {cls.item}>
            <NavLink to="/settings" activeClassName = {cls.active}> Settings</NavLink>
        </div>
    </nav>
}

export default Navigation;