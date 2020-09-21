import React from 'react';
import cls from './MyPosts.module.css';
import NewPost from './NewPost/NewPost';
import Post from './Post/Post';

const MyPosts = () => {
let postsData =[
    {id:1, message: "first text posts", likesCount: 12},
    {id:2, message: "second text posts", likesCount: 23}
]
let postsElement = 
    postsData.map(p=> <Post message = {p.message} id={p.id} likesCount={p.likesCount}/>);

    return (
        <div className = {cls.wrapper}>
            <NewPost />
            {postsElement}
        </div>
    )
}

export default MyPosts;
