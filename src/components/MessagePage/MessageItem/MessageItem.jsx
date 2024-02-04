import React from "react";
import s from './../MessagePage.module.css';


const MessageItem = (props) => {
    return props.state.messageItem.map((item) =>
        <div className={s.app_item}>{item.message}</div>
    )
};

export default MessageItem;