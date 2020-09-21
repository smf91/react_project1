import React from 'react';
import cls from './Post.module.css';

const Post = (props) => {
    return (
        <div className = {cls.post}>
            {/* <div> */}
                <div>
                    <img src="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png" alt=""/>
                </div>
                <div>
                    {props.message} mew mew mew mew mew
                </div>
            {/* </div> */}
        </div>
    )
}

export default Post;
