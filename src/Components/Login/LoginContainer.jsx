import React from 'react'
import { Field, reduxForm } from 'redux-form';
import cls from './LoginContainer.module.scss';
import {loginTC} from '../../redux/auth-reducer'

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import {requared} from '../../utils/validators/validator'
import { Input } from '../Common/FormControls/FormControls'



const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
        props.loginTC(formData)
    }
    return (
        <div className={cls.wrapper}>
            <div className={cls.logonBlock}>
                <h2>Sign in</h2>
                <LoginReduxForm onSubmit={onSubmit} />
            </div>
        </div>
    )
}

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <Field placeholder={"login"} name={"email"} component={Input} validate = {[requared]}/>
            <Field placeholder={"password"} type={"password"}  name={"password"} component={Input} validate = {[requared]} />
            <div><Field type={"checkbox"} name={"rememberMe"} component={"input"} /> remember me</div>
            <button>ok</button>
        </form>
    )
}

// const mapStateToProps = (state) => {
//     return {
//     }
// }

//  отдаем форму в reduxForm  и получившийся контейнер LoginReduxForm монтируем в Login
const LoginReduxForm = reduxForm({
    // нужно указать уникальное имя для формы в формате строки
    form: "login"
})
    (LoginForm)

export default compose(
    connect(null, {
        loginTC
    }),
    // withAuthRedirect,
    withRouter
)(Login)