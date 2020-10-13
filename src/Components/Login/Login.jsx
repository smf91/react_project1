import React from 'react'
import cls from './Login.module.scss';

const Login =() =>{
    return (
        <div className ={cls.wrapper}>
            <div className = {cls.logonBlock}>
                <h1>Sign in</h1>
                <input type="text"/>
                <input type="text"/>
                <button>ok</button>
                
            </div>
        </div>
    )
}

export default Login