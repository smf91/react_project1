import React from 'react';
import cls from './DialogItem.module.scss';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux'
import DialogItem from './DialogItem'
import {compose} from 'redux'

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

export default compose (
    connect (mapStateToProps, {})
)
(DialogItem)
