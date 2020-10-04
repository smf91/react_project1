import React from 'react';
import cls from './DialogItem.module.scss';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux'
import DialogItem from './DialogItem'



const mapStateToProps = (state) => {
    let dialogArr = state.person.person.filter(person => person.myprofile === false)
    return {
        state: state.messagesPage,
        dialogElement : dialogArr.map(d => <NavLink to={`/dialogs/${d.id}`}>
                                                <div className={cls.avatar}>
                                                    <img src={d.img} alt="" />
                                                </div>
                                                {d.firstName} {d.lastName} 
                                            </NavLink>)
    }
}

const mapDispathToProps = () =>{}

const DialogItemContainer = connect (mapStateToProps, mapDispathToProps)(DialogItem)

export default DialogItemContainer;
