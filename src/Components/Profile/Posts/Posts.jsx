import React from 'react';
import cls from './Posts.module.scss';

const Posts = (props) => {
    const postsElement = props.state.map(p => <div className={cls.posts}>
        <div>
            <img src={props.myData.img} alt="avatar" />
        </div>
        <div>
            {p.message}
        </div>
    </div>
    )
    return <div> {postsElement} </div>
}

export default Posts;
