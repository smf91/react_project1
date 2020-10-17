import React from 'react';
import sendMessage from '../../../redux/dialogs-reducer'
// import MessageItem from './Message';
import cls from './MessageItem.module.scss';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';


const MessageContainer = (props) => {
    const sendMessage = (values) => {
        console.log(values)
        sendMessage(values.newMessageText)
    }
    return (
        <div className={cls.wrapper}>
            <div className={cls.logonBlock}>
                <MessageRF onSubmit={sendMessage} />
            </div>
        </div>
    )
}

const MessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"new text message"} name={"newMessageText"} component={"textarea"} />
            </div>
            <div>
                <button>send</button>
            </div>
        </form>
    )
}

const mapStateToProps = (state) => {
    return {
    }
}


//  отдаем форму в reduxForm  и получившийся контейнер LoginReduxForm монтируем в Login
const MessageRF = reduxForm({
    // нужно указать уникальное имя для формы в формате строки
    form: "message"
})
    (MessageForm)


export default compose(
    connect(mapStateToProps, {
    }),
    // withAuthRedirect,
    withRouter
)(MessageContainer)

