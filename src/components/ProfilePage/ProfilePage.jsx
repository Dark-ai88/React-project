import React from "react";
import s from './ProfilePage.module.css';
import MyPost from "./My Post/MyPost";

const ProfilePage = () => {
    return (
        <div className={s.app_content}>
            <div>
                ava + discription
            </div>
            <MyPost />
        </div>
    )
};

export default ProfilePage;