import { useNavigate } from 'react-router-dom';

import progressbar4 from '../../../assets/images/progressbar-4.png';
import classes from './ConfirmationPage.module.css';

const ConfirmationPage = () => {
    return(
        <div className={classes['checkout-confirmation-container']}>
            <div className={classes['checkout-header']}>
                <img src={progressbar4} alt="" />
            </div>
            <div className={classes['confirmation-body']}>
                <h2>Congratualtions!</h2>
                <span>Your order has been confirmed. Check your email for confirmation and detailed order information.</span>
                <span>Ordernumber: 123456789</span>
                <span>Thanks for buying at us!</span>
            </div>
            <div className={classes['btn-container']}>
                <button className={classes['confirmation-btn']}>BACK TO HOMEPAGE</button>
            </div>
        </div>
    );
}

export default ConfirmationPage;