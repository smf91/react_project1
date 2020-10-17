import React from 'react'
import { Field, reduxForm } from 'redux-form';
import cls from './Login.module.scss';
import loginTC from '../../redux/auth-reducer'


import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';


const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
        props.loginTC(formData)
    }
return (
    <div className={cls.wrapper}>
        <div className={cls.logonBlock}>
            <h1>Sign in</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    </div>
)
}

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"login"} name={"login"} component={"input"} />
            </div>
            <div>
                <Field placeholder={"password"} name={"password"} component={"input"} />
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={"input"} /> remember me
                    </div>
            <div>
                <button>ok</button>
            </div>
        </form>
    )
}

const mapStateToProps = (state) => {
    return {
    }
}

//  отдаем форму в reduxForm  и получившийся контейнер LoginReduxForm монтируем в Login
const LoginReduxForm = reduxForm({
    // нужно указать уникальное имя для формы в формате строки
    form: "login"
})
    (LoginForm)

    export default compose(
        connect(mapStateToProps, {
            loginTC
        }),
        // withAuthRedirect,
        withRouter
    )(Login)


// export default Login