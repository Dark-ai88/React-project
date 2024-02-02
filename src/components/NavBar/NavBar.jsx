import React from "react";
import s from './NavBar.module.css';
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className={s.app_nav}>
            <div className={s.app_item_link}>
                <img src="https://cdn-icons-png.flaticon.com/128/6063/6063734.png" alt="" />
                <NavLink to="/profile">profile</NavLink>
            </div>
            <div className={s.app_item_link}>
                <img src="https://cdn-icons-png.flaticon.com/128/6939/6939143.png" alt="" />
                <NavLink to="/message">message</NavLink>
            </div>
            <div className={s.app_item_link}>
                <img src="https://cdn-icons-png.flaticon.com/128/9511/9511346.png" alt="" />
                <NavLink to="/news">news</NavLink>
            </div>
            <div className={s.app_item_link}>
                <img src="https://cdn-icons-png.flaticon.com/128/3233/3233695.png" alt="" />
                <NavLink to="/music">music</NavLink>
            </div>
            <div className={s.app_item_link}>
                <img src="https://cdn-icons-png.flaticon.com/128/4043/4043261.png" alt="" />
                <NavLink to="/settings">settings</NavLink>
            </div>
        </nav>
    )
};

export default NavBar;