import { useNavigate } from 'react-router-dom';

import progressbar4 from '../../../assets/images/progressbar-4.png';
import classes from './ConfirmationPage.module.css';

const ConfirmationPage = () => {
    return(
        <div>
            <div className={classes['checkout-header']}>
                <img src={progressbar4} alt="" />
            </div>
            <div>
                <h2>Congratualtions!</h2>
                <span>Your order has been confirmed. Check your email for confirmation and detailed order information.</span>
                <span>Ordernumber: 123456789</span>
                <span>Thanks for buying at us!</span>
            </div>
            <button>BACK TO HOMEPAGE</button>
        </div>
    );
}

export default ConfirmationPage;