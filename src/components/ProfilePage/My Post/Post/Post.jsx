import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    let postData = props.state.postData.map((item) =>
        <div className={s.app_post_item}>
            <img src="https://cdn-icons-png.flaticon.com/128/3237/3237472.png" alt="" />
            <p className={s.app_post_text}>{item.postMessage}</p>
            <div className={s.app_post_like}>
                <img src="https://cdn-icons-png.flaticon.com/128/1096/1096711.png" alt="" />
                <span className={s.app_post_likeCount}>{item.like}</span>
            </div>
        </div>
    );
    return (
        <div className={s.app_post}>
            {postData}
        </div>
    )
};

export default Post;