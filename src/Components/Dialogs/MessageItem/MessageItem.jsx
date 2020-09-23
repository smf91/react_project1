import React from 'react';
import cls from './MessageItem.module.scss';

const MessageItem = (props) => {
    let messageElement =
        props.messageData.map(el => <div className={cls.message}>{el.text}</div>)

    let sendMessageText = React.createRef()
    let sendMessage = () => {
        let text = sendMessageText.current.value;
        alert(text)
    }

    return (
        <div className={cls.messageBlock}>
            <div>{messageElement}</div>
            <div className={cls.newMessagElement}>
                <textarea ref={sendMessageText}></textarea>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    )
}

export default MessageItem;
