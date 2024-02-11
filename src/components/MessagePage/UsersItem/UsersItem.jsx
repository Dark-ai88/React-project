import React from "react";
import s from './../MessagePage.module.css';
import { NavLink } from "react-router-dom";

const UsersItem = (props) => {
    return props.state.usersItem.map((item) =>
        <div className={s.app_users}>
            <img src="https://cdn-icons-png.flaticon.com/128/3237/3237472.png" alt="" />
            <NavLink to={item.id} className={navData => navData.isActive ? s.active : s.item}>{item.name}</NavLink>
        </div>
    )
};

export default UsersItem;