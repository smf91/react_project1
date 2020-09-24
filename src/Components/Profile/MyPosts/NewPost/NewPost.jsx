import React from 'react';
import cls from './NewPost.module.scss';

const NewPost = (props) => {
    // console.log(props.newPostText);
    let newPostElement = React.createRef();
    let addPost = () => {
        props.dispatch({type : "CREATE-POST"})
    }
    let onPostChange = () =>{
        let text = newPostElement.current.value;
        props.dispatch({type : "UPDATE-TEXTAREA-NEW-POST", text : text})
    }
    return (
        <div className={cls.newPostBlock}>
            <textarea ref={newPostElement} onChange = {onPostChange} 
            value = {props.newPostText}
            />
            <button onClick={addPost} >Send</button>
        </div>
    )
}

export default NewPost;
