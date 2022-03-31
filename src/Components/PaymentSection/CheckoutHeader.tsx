import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";

import classes from './CheckoutHeader.module.css';
import logo from '../../assets/images/Group 38.png';

const CheckoutHeader = () => {
    const navigate = useNavigate();
    const logotypeClickHandler = () => {
        navigate('/');
    }

    return(
        <Fragment>
            <header className={classes.header}>
                <img src={logo} alt="logo" onClick={logotypeClickHandler} />
            </header>
        </Fragment>
    );
}

export default CheckoutHeader;