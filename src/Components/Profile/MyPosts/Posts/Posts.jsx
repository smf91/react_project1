import React from 'react';
import cls from './Posts.module.scss';

const Posts = (props) => {
    return (
        <div className = {cls.posts}>
                <div>
                <img src= {props.myData.img} alt="avatar"/>
                </div>
                <div>
                    {props.message}
                </div>
        </div>
    )
}

export default Posts;
