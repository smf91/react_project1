import React from 'react';
import cls from './DialogItem.module.scss';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let dialogArr = props.person.person.filter(person => person.myprofile === false)
    let dialogElement =
        dialogArr.map(d => <NavLink to={`/dialogs/${d.id}`}>
            <div className={cls.avatar}>
                <img src={d.img} alt="" />
            </div>
            {d.firstName} {d.lastName} </NavLink>)

    return (
        <div className={cls.dialog}>
            {dialogElement}
        </div>
    )
}

export default DialogItem;
