import React from "react";
import s from './Post.module.css';

const Post = () => {
    return (
        <div className={s.app_post}>
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
    )
};

export default Post;