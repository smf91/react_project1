import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import cls from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div>
            <div>
                <img src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"></img>
            </div>
            <ProfileInfo  personData = {props.person}/>
        <MyPosts postsData = {props.state.postsData} />
        </div>
    )
}

export default Profile;
