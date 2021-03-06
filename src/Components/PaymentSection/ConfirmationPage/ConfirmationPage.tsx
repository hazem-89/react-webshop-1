import { useKey } from '../../../Store/ConfirmationContext';

import progressbar4 from '../../../assets/images/progressbar-4.png';
import classes from './ConfirmationPage.module.css';
import { useNavigate } from 'react-router-dom';
import { DeliveryData, PaymentData, UserData } from '../../../data';
import { Fragment } from 'react';
import CheckoutHeader from '../CheckoutHeader';

interface Props {
    userData?: UserData;
    deliveryData?: DeliveryData;
    paymentData?: PaymentData;
}

const ConfirmationPage = (props: Props) => {
    const navigate = useNavigate()
    window.localStorage.setItem('cartState', '');

    const { key } = useKey();
    if (!key) return null;

    function refreshPage() {
        navigate('/');
        window.location.reload();
    }

    window.history.pushState(null, document.URL);
    window.addEventListener('popstate', function(event) {
    navigate('/');
    window.location.reload();
    });

    return (
        <Fragment>
            <CheckoutHeader />
            <div className={classes['checkout-confirmation-container']}>
                <div className={classes['checkout-header']}>
                    <img src={progressbar4} alt="" />
                </div>
                <div className={classes['confirmation-body']}>
                    <h2>Congratulations!</h2>
                    <span>Your order has been confirmed. Check your email for confirmation and detailed order information.</span>
                    <span className={classes['ordernumber']}>{`Ordernumber: ${key.key}`}</span>
                    <span>Thanks for buying from us!</span>
                </div>
                <div className={classes['btn-container']}>
                    <button className={classes['confirmation-btn']} onClick={refreshPage}>BACK TO HOMEPAGE</button>
                </div>
            </div>
        </Fragment>
    );
}

export default ConfirmationPage;