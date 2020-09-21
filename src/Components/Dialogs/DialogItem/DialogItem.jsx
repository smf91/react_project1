import React from 'react';
import cls from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';

let dialogsData = [
    { name: "Dimich", id: "1" },
    { name: "Genadich", id: "3" },
    { name: "Borisich", id: "4" },
    { name: "Inokentich", id: "5" },
    { name: "Mihalich", id: "2" }
]
let dialogElement = dialogsData.map(d => <NavLink to = {`/dialogs/${d.id}`}>{d.name}</NavLink>)

const DialogItem = (props) => {
    return (
        <div className = {cls.dialog}>
            {dialogElement}
        </div>
    )
}

export default DialogItem;
