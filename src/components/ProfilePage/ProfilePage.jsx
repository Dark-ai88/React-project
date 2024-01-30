import React from "react";
import s from './ProfilePage.module.css';

const ProfilePage = () => {
    return (
        <div className={s.app_content}>
            <div>
                ava + discription
            </div>
            <div>
                My post
                <div>
                    New post
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