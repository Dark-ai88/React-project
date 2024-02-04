import React from "react";
import s from './MessagePage.module.css';
import UsersItem from "./UsersItem/UsersItem";
import MessageItem from "./MessageItem/MessageItem";

const MessagePage = (props) => {
    return (
        <div className={s.app_message}>
            <div className={s.app_link_users}>
                <UsersItem state={props.state.messagePage} />
            </div>
            <div className={s.app_item_message}>
                <MessageItem state={props.state.messagePage} />
            </div>
        </div>
    )
};

export default MessagePage;