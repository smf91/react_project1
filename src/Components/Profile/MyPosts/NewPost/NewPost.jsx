import React from 'react';
import cls from './NewPost.module.scss';
import {updateTextareaNewPostActionCreater,createPostActionCreater } from './../../../../redux/profile-reducer'

const NewPost = (props) => {
    let newPostElement = React.createRef();
    let addPost = () => {
        props.dispatch(createPostActionCreater())
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateTextareaNewPostActionCreater (text) )
    }
    return (
        <div className={cls.newPostBlock}>
            <textarea ref={newPostElement} onChange={onPostChange}
                value={props.newPostText}
            />
            <button onClick={addPost} >Send</button>
        </div>
    )
}

export default NewPost;
