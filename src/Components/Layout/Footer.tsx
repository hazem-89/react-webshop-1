
import classes from './Footer.module.css';
import logoFooter from '../../assets/images/Group 39.png';

import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import AdminPage from '../Admin/AdminPage';
import { Link } from 'react-router-dom';

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
                    <InstagramIcon style={{fontSize: 36}} />
                    <YouTubeIcon style={{fontSize: 36}} />
                    <FacebookIcon style={{fontSize: 36}} />
                </div>
            </div>
            <div className={classes['footer-item-devider']}></div>
            <div className={classes['footer-links-container']}>
            <Link to={'/'}><button type="button" className="focus:outline-none text-white bg-themeColor hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Home</button></Link>
                <span className={classes['link-separator']}></span>
                <button type="button" className="focus:outline-none text-white bg-themeColor hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">User</button>
                <span className={classes['link-separator']}></span>
                <Link to={'/login'}><button type="button" className="focus:outline-none text-white bg-themeColor hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Admin</button></Link>
                <span className={classes['link-separator']}></span>
                <Link to={'/about'}><button type="button" className="focus:outline-none text-white bg-themeColor hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">About</button></Link>
                <span className={classes['link-separator']}></span>
                <button type="button" className="focus:outline-none text-white bg-themeColor hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Info</button>
                <span className={classes['link-separator']}></span>
                <Link to={'/faq'}><button type="button" className="focus:outline-none text-white bg-themeColor hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">FAQ</button></Link>
            </div>
        </div>
    );
}

export default Footer;