import React from 'react'
import cls from './Fetching.module.scss';
import preloader from '../../../assets/images/preloader.gif'

let Fething = (props) =>{
    return(
        <div className = {cls.fetching}>
            <img src={preloader} alt="preloader"/>
        </div>
    )
}

export default Fething