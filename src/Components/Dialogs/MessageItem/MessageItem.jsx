import React from 'react';
import cls from './MessageItem.module.css';

let messageData = [
    { text: "hello"},
    { text: "what is yor name?"},
    { text: "kfkfkf?"}
]

let messageElement = messageData.map(el =>{
    return <div className = {cls.message}>{el.text}</div>
})

const MessageItem = (props) => {
    return (
    <div>{messageElement}</div>
    )
}

export default MessageItem;
