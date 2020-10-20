import React from 'react';
import { NavLink } from 'react-router-dom';
import cls from './Header.module.scss';
import logo from '../../assets/images/react_img.png'

const Header =(props) =>{
    // debugger
    return <header className={cls.header}>
        <div className={cls.blockLogo}>
            <img src={logo} alt="logo"/>
        </div>
        <div className={cls.blockLogin}>
        {props.auth.data === null 
        ?<div className = {cls.loginLogoutBlock}> <NavLink to={'/login'}> <button>login</button> </NavLink> </div>
        :<div className = {cls.loginLogoutBlock}>Hello {props.auth.data.login}! <button onClick ={props.logout}>logout</button> </div>
        } 
        </div>
    </header>
}

export default Header;