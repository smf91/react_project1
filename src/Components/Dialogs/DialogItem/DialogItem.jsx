import React from 'react';
import cls from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
let dialogElement =
    props.dialogsData.map(d => <NavLink to = {`/dialogs/${d.id}`}>{d.name}</NavLink>)
    return (
        <div className = {cls.dialog}>
            {dialogElement}
        </div>
    )
}

export default DialogItem;
