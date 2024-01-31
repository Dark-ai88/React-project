import React from "react";
import s from './ProfilePage.module.css';

const ProfilePage = () => {
    return (
        <div className={s.app_content}>
            <div>
                ava + discription
            </div>
            <div>
                <p className={s.app_My_Post}>My post</p>
                <div className={s.app_item_Post}>
                    <textarea className={s.app_textForm}></textarea>
                    <button className={s.app_button}>send</button>
                </div>
                <div>
                    <div>
                        post 1
                    </div>
                    <div>
                        post 2
                    </div>
                    <div>
                        post 3
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProfilePage;