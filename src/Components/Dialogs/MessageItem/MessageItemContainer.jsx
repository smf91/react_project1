import React from 'react';
import { createMessageActionCreater, updateTextareaNewMessageActionCreater } from './../../../redux/dialogs-reducer'
import MessageItem from './MessageItem';
import cls from './MessageItem.module.scss';
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
    return {
        state: state.messagesPage,
        messageElement : state.messagesPage.messageData.map(el => <div className={cls.message}>{el.text}</div>)
    }
}
const mapDispathToProps = (dispatch) => {
    return {
        onMessageChange : (text) => {
            dispatch(updateTextareaNewMessageActionCreater(text))
        },
        addMessage : () => {dispatch(createMessageActionCreater())}
    }
}

const MessageItemContainer = connect(mapStateToProps, mapDispathToProps)(MessageItem)

export default MessageItemContainer;
