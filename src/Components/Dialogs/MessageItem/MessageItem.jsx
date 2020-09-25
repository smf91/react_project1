import React from 'react';
import cls from './MessageItem.module.scss';

const MessageItem = (props) => {
    let sendMessageText = React.createRef()
    let onMessageChange=() =>{
        let text = sendMessageText.current.value
        props.dispatch ({type : "UPDATE-TEXTAREA-NEW-MESSAGE", text : text})
    }

    let addMessage = () => {
        props.dispatch({type : "CREATE-MESSAGE"})
    }


    let messageElement =
        props.messageData.map(el => <div className={cls.message}>{el.text}</div>)
    return (
        <div className={cls.messageBlock}>
            <div>{messageElement}</div>
            <div className={cls.newMessagElement}>
                <textarea ref={sendMessageText} 
                            onChange = {onMessageChange}
                            value = {props.newMessageText}
                            />
                <button onClick={addMessage}>Send</button>
            </div>
        </div>
    )
}

export default MessageItem;
