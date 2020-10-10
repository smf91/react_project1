import React from 'react';
import cls from './DialogItem.module.scss';
// import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    return(
    <div className ={cls.dialog}>
        {props.dialogElement}
    </div>
    )
}

export default DialogItem;
