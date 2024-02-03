import React from "react";
import s from './ProfilePage.module.css';
import MyPost from "./My Post/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const ProfilePage = (props) => {
    return (
        <div className={s.app_content}>
            <ProfileInfo />
            <MyPost state={props.state} />
        </div>
    )
};

export default ProfilePage;