import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";

import HeaderCartButton from "./HeaderCartButton";
import logo from '../../assets/images/Group 38.png';
import classes from './Header.module.css';
import AsideBar from "./AsideBar";

const Header = (props: { onShowCart: any; showSideBar: any; }) => {
    const navigate = useNavigate();
    const logotypeClickHandler = () => {
        navigate('/');
    }
    return (
        <Fragment>
            <header className={classes.header}>
                <div className={classes['header-item-container']}>
                    <AsideBar onClick={props.showSideBar} />
                    <img src={logo} alt="logo" onClick={logotypeClickHandler} />
                    <HeaderCartButton onClick={props.onShowCart} />
                </div>

            </header>
        </Fragment>
    );
}

export default Header;