import React from 'react';
import s from'./Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
        <img src='https://www.freelogodesign.org/Content/img/logo-ex-7.png' alt='' />
        <div className={s.LoginBlock}>
            {props.isAuth
                ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                : <NavLink to={"/login"}>Login</NavLink>}
        </div>
    </header>
}

export default Header;