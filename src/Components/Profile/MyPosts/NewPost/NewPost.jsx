import React from 'react';
import cls from './NewPost.module.scss';

const NewPost = (props) => {
    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.createPost(text)
        newPostElement.current.value = ''
    }
    return (
        <div className={cls.newPostBlock}>
            <textarea ref={newPostElement}></textarea>
            <button onClick={addPost} >Send</button>
        </div>
    )
}

export default NewPost;
