import React from 'react';
import cls from './MyPosts.module.css';
import NewPostContainer from './NewPost/NewPostContainer';
import Posts from './Posts/Posts';

const MyPosts = (props) => {
    let state = props.store.getState().profilePage.postsData
    let postsElement = state.map(p=> <Posts message = {p.message} id={p.id} likesCount={p.likesCount} myData={props.myData}/>);

    return (
        <div className = {cls.wrapper}>
            <NewPostContainer   store = {props.store} 
                                newPostText={props.newPostText}
                                dispatch = {props.dispatch}
            />
            {postsElement}
        </div>
    )
}

export default MyPosts;
