import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import cls from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    const myProfile = props.person.find(person => person.myprofile === true)
    return (
        <div>
            <div>
                <img src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"></img>
            </div>
            <ProfileInfo myData={myProfile} />
            <MyPosts postsData={props.state.postsData}
                createPost={props.createPost}
                newPostText={props.state.newPostText}
                updateTexareaNewPost={props.updateTexareaNewPost}
                myData={myProfile}/>
        </div>
    )
}

export default Profile;
