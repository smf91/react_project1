import React from 'react';
import cls from './MyPosts.module.css';
import NewPost from './NewPost/NewPost';
import Post from './Post/Post';

const MyPosts = (props) => {
let postsElement = props.postsData.map(p=> <Post message = {p.message} id={p.id} likesCount={p.likesCount}/>);

    return (
        <div className = {cls.wrapper}>
            <NewPost createPost = {props.createPost}/>
            {postsElement}
        </div>
    )
}

export default MyPosts;
