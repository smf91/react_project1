import React from 'react';
import cls from './MessageItem.module.scss';

const MessageItem = (props) => {
    let sendMessageText = React.createRef()

    let onMessageChange = () => {
        let text = sendMessageText.current.value
        props.onMessageChange(text)
    }
    let addMessage =()=> {props.addMessage()}
    
    return (
        <div className={cls.messageBlock}>
            <div>{props.messageElement}</div>
            <div className={cls.newMessagElement}>
                <textarea ref={sendMessageText}
                    onChange={onMessageChange}
                    value={props.newMessageText}
                />
                <button onClick={props.addMessage}>Send</button>
            </div>
        </div>
    )
}

export default MessageItem;
