import React from 'react';
import cls from './MyPosts.module.css';
import NewPost from './NewPost/NewPost';
import Posts from './Posts/Posts';

const MyPosts = (props) => {
let postsElement = props.postsData.map(p=> <Posts message = {p.message} id={p.id} likesCount={p.likesCount} myData={props.myData}/>);

    return (
        <div className = {cls.wrapper}>
            <NewPost newPostText={props.newPostText}
                    dispatch = {props.dispatch}
            />
            {postsElement}
        </div>
    )
}

export default MyPosts;
