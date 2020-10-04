import React from 'react';
// import MyPosts from './MyPosts/MyPosts';
// import cls from './Profile.module.css';
import ProfileInfoContainer from './ProfileInfo/ProfileInfoContainer';
import NewPostContainer from './NewPost/NewPostContainer';
import PostsContainer from './Posts/PostsContainer'

const Profile = () => {
    return (
        <div>
            <div>
                <img src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"></img>
            </div>
            <ProfileInfoContainer />
            <NewPostContainer  />
            <PostsContainer />
        </div>
    )
}

export default Profile;
