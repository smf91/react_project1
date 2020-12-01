import React from 'react'
import cls from './Fetching.module.scss';
import preloader from '../../../assets/images/preloader.gif'

let Fetching = (props) => {
    return (
        <div className={cls.wrapper}>
            <div className={cls.preloader}>
                <img src={preloader} alt="preloader" />
            </div>
        </div>
    )
}

export default Fetching