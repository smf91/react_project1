import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import cls from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    // let postsData =[
    //     {id:1, message: "first text posts", likesCount: 12},
    //     {id:2, message: "second text posts", likesCount: 23}
    // ]
    return (
        <div>
            <div>
                <img src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"></img>
            </div>
            <ProfileInfo />
        <MyPosts postsData = {props.postsData} />
        </div>
    )
}

export default Profile;
