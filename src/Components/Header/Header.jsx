import React from 'react';
import { NavLink } from 'react-router-dom';
import cls from './Header.module.scss';
import logo from '../../assets/images/react_img.png'

const Header =(props) =>{
    return <header className={cls.header}>
        <div className={cls.blockLogo}>
            <img src={logo} alt="logo"/>
        </div>
        <div className={cls.blockLogin}>
        {props.auth.data === null ?
            <NavLink to={'/login'}>Login</NavLink>
            : props.auth.data.login}
        </div>
    </header>
}

export default Header;