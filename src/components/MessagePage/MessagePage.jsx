import React from "react";
import s from './MessagePage.module.css';
import { NavLink } from "react-router-dom";

const MessagePage = (props) => {

    let usersItem = props.state.usersItem.map((item) =>
        <div className={s.app_users}>
            <img src="https://cdn-icons-png.flaticon.com/128/3237/3237472.png" alt="" />
            <NavLink to={item.id}>{item.name}</NavLink>
        </div>
    );

    let messageItem = props.state.messageItem.map((item) =>
        <div className={s.app_item}>{item.message}</div>
    );

    return (
        <div className={s.app_message}>
            <div className={s.app_link_users}>
                {usersItem}
            </div>
            <div className={s.app_item_message}>
                {messageItem}
            </div>
        </div>
    )
};

export default MessagePage;