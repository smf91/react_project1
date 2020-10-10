import React from 'react';
import { NavLink } from 'react-router-dom';
import cls from './Header.module.css';

const Header =(props) =>{
    return <header className={cls.header}>
        <div lassName={cls.blockLogo}>
        <image src = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSo08Mi3qmkDV2ivCx-Xt0vZL5LeLAPbVP2yA&usqp=CAU" alt='image'></image>
        </div>
        <div lassName={cls.blockLogin}>
        {props.auth.data === null ?
            <NavLink to={'/login'}>Login</NavLink>
            : props.auth.data.login}
        </div>
    </header>
}

export default Header;