// import React from 'react'
// import { connect } from 'react-redux'
// import { updateStatusTC, getStatusTC, toogleIsFetching, setCurrentProfile, getProfileTC, createPostAC } from '../../redux/profile-reducer'
// import ProfileInfo from './ProfileInfo/ProfileInfo'
// import PostsContainer from './Posts/PostsContainer'
// import { Field, reduxForm } from 'redux-form'
// import { withRouter } from 'react-router-dom'
// // import withAuthRedirect from '../../hoc/withAuthRedirect'
// import { compose } from 'redux'
// // импорт валидаторов
// import { requared, maxLenghtCreater } from '../../utils/validators/validator'
// // импортируем кастомную Texarea
// import { Textarea } from '../Common/FormControls/FormControls'
// import cls from './ProfileContainer.module.scss'


// class ProfileContainer extends React.Component {



    
//     // description local state and life cycle method for class component
//     // componentDidMount() {
//     //     let userId = null
//     //     if (!this.props.match.params.userId && !this.props.autorisedUserId) {
//     //         this.props.history.push('/login')
//     //     }
//     //     else {
//     //         userId = this.props.match.params.userId || this.props.autorisedUserId.id
//     //     }
//     //     this.props.getProfileTC(userId)
//     //     // делаем запрос за статусом пользователя
//     //     this.props.getStatusTC(userId)
//     //     // this.props.updateStatusTC()
//     // }
//     sendPost = (values) => {
//         this.props.createPostAC(values.textNewPost)
//     }
//     render() {
//         return <>
//             <ProfileInfo profileInfo={this.props.profileInfo}
//                 status={this.props.status}
//                 updateStatus={this.props.updateStatusTC}
//             />
//             <AddPostFormRF onSubmit={this.sendPost} />
//             <PostsContainer />
//         </>
//     }
// }

// let maxLenght30 = maxLenghtCreater(30)

// const AddPostForm = (props) => {
//     return (
//         <div className={cls.newPostBlock}>
//             <form onSubmit={props.handleSubmit} >
//                 <div>
//                     <Field placeholder={"text message"}
//                         // через name  получаем доступ к данным строки в обьекте AddPostFormRF
//                         name={"textNewPost"}
//                         //  говорим redux-form  какую форму отрисовать (в данном случае кастомная форма)
//                         component={Textarea}
//                         //  передаем нужные валидаторы для данного Field
//                         validate={[requared, maxLenght30]}
//                     />
//                 </div>
//                 <div>
//                     <button>send</button>
//                 </div>
//             </form>
//         </div>
//     )
// }
// //  отдаем форму в reduxForm  и получившийся контейнер NewPostRF монтируем в ProfileContainer
// const AddPostFormRF = reduxForm({
//     // нужно указать уникальное имя для формы в формате строки
//     form: "newPost"
// })
//     (AddPostForm)
// const mapStateToProps = (state) => {
//     return {
//         profileInfo: state.profilePage.currentProfile,
//         status: state.profilePage.status,
//         autorisedUserId: state.auth.data
//     }
// }
// //  оборачиваем компоненту с помощью compose
// // вторым параметром передается обьект первым функции(функции применяются в обратном порядке)
// export default compose(
//     connect(mapStateToProps, {
//         createPostAC,
//         updateStatusTC,
//         getStatusTC,
//         toogleIsFetching,
//         setCurrentProfile,
//         getProfileTC
//     }),
//     // withAuthRedirect,
//     withRouter
// )(ProfileContainer)
// // то-же самое что и выше но только без compose
// // // создается компонента с функцией отслеживания URL на основе контейнерной компоненты
// // let withUrlDataContainerComponent = withRouter(ProfileContainer)

// // // создается компонента с функцией редиректа на основе контейнерной компоненты
// // let AuthRedirectComponent = withAuthRedirect(withUrlDataContainerComponent)

// // export default connect(mapStateToProps, {
// //                                         toogleIsFetching,
// //                                         setCurrentProfile,
// //                                         getProfileInfoTC
// //                                     })(AuthRedirectComponent)
