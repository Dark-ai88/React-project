import React from "react";
import s from './NavBar.module.css';

const NavBar = () => {
    return (
        <nav className={s.app_nav}>
            <div>
                <a href="/profile">profile</a>
            </div>
        </nav>
    )
};

export default NavBar;