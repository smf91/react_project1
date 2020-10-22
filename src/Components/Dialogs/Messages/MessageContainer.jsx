import React from 'react';
// import sendMessage from '../../../redux/dialogs-reducer'
// import MessageItem from './Message';
import cls from './MessageContainer.module.scss';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
// импортируем кастомную Textarea
import { Textarea } from '../../Common/FormControls/FormControls'
// импорт валидаторов
import { requared, maxLenghtCreater } from '../../../utils/validators/validator'


const MessageContainer = (props) => {
    const sendMessage = (values) => {
        console.log(values)
        sendMessage(values.newMessageText)
    }
    return (
        <div className={cls.wrapper}>
                <div className={cls.msgItem}>
                    <div>dfdfdffddfdffdf</div>
                    <div>dfdfdffddb55g5gfdffdf</div>
                    <div>dfdfdffddavaavssvfdffdf</div>
                </div>
                <MessageRF onSubmit={sendMessage} />
        </div>
    )
}

// настройка валидатора
let maxLenght300 = maxLenghtCreater(300)

const MessageForm = (props) => {
    return (
        <div className={cls.newMsgBlock}>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"new text message"}
                        name={"newMessageText"}
                        component={Textarea} 
                        //  передаем нужные валидаторы для данного Field
                        validate={[requared, maxLenght300]}
                        />
            </div>
            <div className ={ cls.buttonBlock}>
                <button>send</button>
            </div>
        </form>
        </div>
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

