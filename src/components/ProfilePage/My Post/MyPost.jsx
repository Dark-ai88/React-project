import React from "react";
import s from './MyPost.module.css';
import Post from "./Post/Post";

const MyPost = () => {
    return (
        <div>
            <p className={s.app_My_Post}>My post</p>
            <div className={s.app_item_Post}>
                <textarea className={s.app_textForm}></textarea>
                <button className={s.app_button}>send</button>
            </div>
            <Post likeCount='23' />
        </div>
    )
};

export default MyPost;