import React from "react";
import s from './Post.module.css';

const Post = () => {
    return (
        <div className={s.app_post}>
            <div className={s.app_post_item}>
                <img src="https://cdn-icons-png.flaticon.com/128/11520/11520091.png" alt="" />
                <p className={s.app_post_text}>Post 1</p>
            </div>
        </div>
    )
};

export default Post;