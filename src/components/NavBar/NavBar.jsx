import React from "react";
import s from './NavBar.module.css';
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className={s.app_nav}>
            <div className={s.app_item_link}>
                <img src="https://cdn-icons-png.flaticon.com/128/6063/6063734.png" alt="" />
                <NavLink to="/profile" className={navData => navData.isActive ? s.active : s.item}>profile</NavLink>
            </div>
            <div className={s.app_item_link}>
                <img src="https://cdn-icons-png.flaticon.com/128/6939/6939143.png" alt="" />
                <NavLink to="/message" className={navData => navData.isActive ? s.active : s.item}>message</NavLink>
            </div>
            <div className={s.app_item_link}>
                <img src="https://cdn-icons-png.flaticon.com/128/9511/9511346.png" alt="" />
                <NavLink to="/news" className={navData => navData.isActive ? s.active : s.item}>news</NavLink>
            </div>
            <div className={s.app_item_link}>
                <img src="https://cdn-icons-png.flaticon.com/128/3233/3233695.png" alt="" />
                <NavLink to="/music" className={navData => navData.isActive ? s.active : s.item}>music</NavLink>
            </div>
            <div className={s.app_item_link}>
                <img src="https://cdn-icons-png.flaticon.com/128/4043/4043261.png" alt="" />
                <NavLink to="/settings" className={navData => navData.isActive ? s.active : s.item}>settings</NavLink>
            </div>
        </nav>
    )
};

export default NavBar;