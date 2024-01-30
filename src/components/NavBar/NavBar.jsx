import React from "react";
import s from './NavBar.module.css';

const NavBar = () => {
    return (
        <nav className={s.app_nav}>
            <div className={s.app_item_link}>
                <img src="https://cdn-icons-png.flaticon.com/128/6063/6063734.png" alt="" />
                <a href="/profile">profile</a>
            </div>
            <div className={s.app_item_link}>
                <img src="https://cdn-icons-png.flaticon.com/128/6939/6939143.png" alt="" />
                <a href="/message">message</a>
            </div>
            <div className={s.app_item_link}>
                <a href="/news">news</a>
            </div>
            <div className={s.app_item_link}>
                <a href="/music">music</a>
            </div>
            <div className={s.app_item_link}>
                <a href="/settings">settings</a>
            </div>
        </nav>
    )
};

export default NavBar;