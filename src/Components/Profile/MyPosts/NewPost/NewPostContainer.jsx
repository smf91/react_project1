import React from 'react';
import cls from './NewPost.module.scss';
import {updateTextareaNewPostActionCreater,createPostActionCreater } from './../../../../redux/profile-reducer'
import NewPost from './NewPost';

const NewPostContainer = (props) => {
    let state = props.store.getState().profilePage

    let addPost = () => {
        props.store.dispatch(createPostActionCreater())
    }
    let onPostChange = (text) => {
        props.store.dispatch(updateTextareaNewPostActionCreater (text) )
    }


    return (
        <NewPost    addPost ={addPost}
                    onPostChange ={onPostChange}
                    newPostText={state.newPostText}
        />
    )
}

export default NewPostContainer;
