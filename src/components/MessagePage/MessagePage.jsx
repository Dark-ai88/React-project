import React from "react";
import s from './MessagePage.module.css';
import { NavLink } from "react-router-dom";

const MessagePage = () => {
    return (
        <div className={s.app_message}>
            <div className={s.app_link_users}>
                <div className={s.app_users}>
                    <NavLink to='sasha'>Sasha</NavLink>
                </div>
                <div className={s.app_users}>
                    <NavLink to='andrey'>Andrey</NavLink>
                </div>
                <div className={s.app_users}>
                    <NavLink to='leha'>Leha</NavLink>
                </div>
                <div className={s.app_users}>
                    <NavLink to='alex'>Alex</NavLink>
                </div>
                <div className={s.app_users}>
                    <NavLink to='misha'>Misha</NavLink>
                </div>
            </div>
            <div className={s.app_item_message}>
                <div className={s.app_item}>Hi, my name is Alex</div>
                <div className={s.app_item}>I learn React.</div>
                <div className={s.app_item}>And this cool</div>
            </div>
        </div>
    )
};

export default MessagePage;