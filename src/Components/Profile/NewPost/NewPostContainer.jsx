// // import React from 'react';
// // import cls from './NewPost.module.scss';
// import { updateTextareaNewPostActionCreater, createPostActionCreater } from './../../../redux/profile-reducer'
// import NewPost from './NewPost'
// // import { connect } from 'react-redux'
// import { compose } from 'redux'

// // const mapDispathToProps = (dispatch) => {
// //     return {
// //         addPost: () => { dispatch(createPostActionCreater() )},
// //         onPostChange: (text) => { dispatch(updateTextareaNewPostActionCreater(text)) }
// //     }
// // }
// const mapStateToProps = (state) => {
//     const myProfileData = state.person.person.find(person => person.myprofile === true)
//     return {
//         state: state.profilePage,
//         postsData: state.profilePage.postsData,
//         myData: myProfileData
//     }
// }

// export default compose (
//     mapStateToProps,
//     updateTextareaNewPostActionCreater,
//     createPostActionCreater
// )(NewPost)

// // const NewPostContainer = connect(mapStateToProps, updateTextareaNewPostActionCreater, createPostActionCreater )(NewPost)
// // export default NewPostContainer;
