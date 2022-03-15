import classes from './HamburgerMenu.module.css';

const HamburgerMenu = () => {
    return(
        <div className={classes.hamcontainer}>
            <div className={classes.first}></div>
            <div className={classes.second}></div>
            <div className={classes.third}></div>
        </div>
    );
}

export default HamburgerMenu;