import React from "react";
import { useNavigate } from "react-router-dom";

import logo from '../../assets/images/Group 38.png';
import classes from './AdminHeader.module.css';

const Header = () => {
    const navigate = useNavigate();

    const onLogOutHandler = () => {
        navigate('/');
    }
    return(
        <header className={classes.header}>
            <div className={classes['header-item-container']}>
                <img src={logo} alt="" />
                <div>
                    <button className={classes['admin-header-btn']} onClick={onLogOutHandler}>Log out</button>
                </div>
            </div>
        </header>
    );
}

export default Header;