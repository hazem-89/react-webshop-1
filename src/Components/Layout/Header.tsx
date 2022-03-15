import React, { Fragment } from "react";

import HamburgerMenu from "./HamburgerMenu";
import HeaderCartButton from "./HeaderCartButton";
import classes from './Header.module.css';

const Header = (props: { onShowCart: any; }) => {
    return(
        <Fragment>
            <header className={classes.header}>
                <div className={classes['header-item-container']}>
                <HamburgerMenu />
                <HeaderCartButton onClick={props.onShowCart} />
                </div>
            </header>
        </Fragment>
    );
}

export default Header;