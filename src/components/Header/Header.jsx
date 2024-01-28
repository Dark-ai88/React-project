import React from "react";
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.app_header}>
            <img src="https://cdn-icons-png.flaticon.com/128/3541/3541271.png" alt="" />
            <span className={s.app_header_textLogo}>write</span>
        </header>
    )
};

export default Header;