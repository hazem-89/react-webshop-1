import classes from './Footer.module.css';
import logoFooter from '../../assets/images/Group 39.png';

import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
    return(
        <div className={classes.footer}>
            <div className={classes['footer-item-container']}>
                <div className={classes['brand-container']}>
                    <img src={logoFooter} alt="" />
                </div>
                <div className={classes['brand-info-container']}>
                    <span>Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco
                        laboris.</span>
                </div>
                <div className={classes['social-media-container']}>
                    <InstagramIcon className={classes['instagram-icon']} />
                    <YouTubeIcon className={classes['youtube-icon']} />
                    <FacebookIcon className={classes['facebook-icon']} />
                </div>
            </div>
            <div className={classes['footer-item-devider']}></div>
            <div className={classes['footer-links-container']}>
                <span>Home</span>
                <span className={classes['link-separator']}></span>
                <span>User</span>
                <span className={classes['link-separator']}></span>
                <span>Admin</span>
                <span className={classes['link-separator']}></span>
                <span>About</span>
                <span className={classes['link-separator']}></span>
                <span>Info</span>
                <span className={classes['link-separator']}></span>
                <span>FAQ</span>
            </div>
        </div>
    );
}

export default Footer;