import React from 'react';
import { createMessageActionCreater, updateTextareaNewMessageActionCreater } from './../../../redux/dialogs-reducer'
import MessageItem from './MessageItem';
import cls from './MessageItem.module.scss';

const MessageItemContainer = (props) => {
    let state = props.store.getState().messagesPage
    // let person = props.store.getState().person

    let onMessageChange = (text) => {
        props.store.dispatch(updateTextareaNewMessageActionCreater(text))
    }
    let addMessage = () => {
        props.store.dispatch(createMessageActionCreater())
    }

    let messageElement = 
    state.messageData.map(el => <div className={cls.message}>{el.text}</div>) 
    return (
        <MessageItem onMessageChange={onMessageChange}
                    addMessage={addMessage}
                    messageElement={messageElement}
                    newMessageText = {state.newMessageText}
        />
    )
}

export default MessageItemContainer;
