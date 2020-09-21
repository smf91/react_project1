import React from 'react';
import cls from './MessageItem.module.css';

const MessageItem = (props) => {
    let messageElement =
        props.messageData.map(el => <div className = {cls.message}>{el.text}</div>)
    return (
    <div>{messageElement}</div>
    )
}

export default MessageItem;
