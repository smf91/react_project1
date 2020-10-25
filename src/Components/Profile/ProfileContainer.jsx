import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { updateStatusTC, getStatusTC, toogleIsFetching, setCurrentProfile, getProfileTC, createPostAC } from './../../redux/profile-reducer'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import PostsContainer from './Posts/PostsContainer'
import { Field, reduxForm } from 'redux-form'
import { withRouter } from 'react-router-dom'
// import withAuthRedirect from '../../hoc/withAuthRedirect'
import { compose } from 'redux'
// импорт валидаторов
import { requared, maxLenghtCreater } from '../../utils/validators/validator'
// импортируем кастомную Texarea
import { Textarea } from '../Common/FormControls/FormControls'
import cls from './ProfileContainer.module.scss'


const ProfileContainer = (props) => {
    useEffect(()=>{
        let userId = null
        if (!props.match.params.userId && !props.autorisedUserId) {
            props.history.push('/login')
        }
        else {
            userId = props.match.params.userId || props.autorisedUserId.id
        }
        props.getProfileTC(userId)
        // делаем запрос за статусом пользователя
        props.getStatusTC(userId)
        // this.props.updateStatusTC()
    },[props.match.params.userId, props.autorisedUserId])
const sendPost = (values) => {
        props.createPostAC(values.textNewPost)
    }
        return <>
            <ProfileInfo profileInfo={props.profileInfo}
                status={props.status}
                updateStatus={props.updateStatusTC}
            />
            <AddPostFormRF onSubmit={sendPost} />
            <PostsContainer />
        </>
}

let maxLenght30 = maxLenghtCreater(30)

const AddPostForm = (props) => {
    return (
        <div className={cls.newPostBlock}>
            <form onSubmit={props.handleSubmit} >
                <div>
                    <Field placeholder={"text message"}
                        // через name  получаем доступ к данным строки в обьекте AddPostFormRF
                        name={"textNewPost"}
                        //  говорим redux-form  какую форму отрисовать (в данном случае кастомная форма)
                        component={Textarea}
                        //  передаем нужные валидаторы для данного Field
                        validate={[requared, maxLenght30]}
                    />
                </div>
                <div>
                    <button>send</button>
                </div>
            </form>
        </div>
    )
}
//  отдаем форму в reduxForm  и получившийся контейнер NewPostRF монтируем в ProfileContainer
const AddPostFormRF = reduxForm({
    // нужно указать уникальное имя для формы в формате строки
    form: "newPost"
})
    (AddPostForm)
const mapStateToProps = (state) => {
    return {
        profileInfo: state.profilePage.currentProfile,
        status: state.profilePage.status,
        autorisedUserId: state.auth.data
    }
}
//  оборачиваем компоненту с помощью compose
// вторым параметром передается обьект первым функции(функции применяются в обратном порядке)
export default compose(
    connect(mapStateToProps, {
        createPostAC,
        updateStatusTC,
        getStatusTC,
        toogleIsFetching,
        setCurrentProfile,
        getProfileTC
    }),
    // withAuthRedirect,
    withRouter
)(ProfileContainer)
// то-же самое что и выше но только без compose
// // создается компонента с функцией отслеживания URL на основе контейнерной компоненты
// let withUrlDataContainerComponent = withRouter(ProfileContainer)

// // создается компонента с функцией редиректа на основе контейнерной компоненты
// let AuthRedirectComponent = withAuthRedirect(withUrlDataContainerComponent)

// export default connect(mapStateToProps, {
//                                         toogleIsFetching,
//                                         setCurrentProfile,
//                                         getProfileInfoTC
//                                     })(AuthRedirectComponent)
