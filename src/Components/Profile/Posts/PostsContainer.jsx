// import React from 'react'
// import cls from './Posts.module.scss'
import Posts from './Posts'
import { connect } from 'react-redux'

const mapDispathToProps = (dispatch) => {
    return {}
}
const mapStateToProps = (state) => {
    const myProfileData = state.person.person.find(person => person.myprofile === true)
    return{
        state : state.profilePage.postsData,
        myData : myProfileData
    }
}

const PostsContainer = connect (mapStateToProps, mapDispathToProps) (Posts)

export default PostsContainer;
