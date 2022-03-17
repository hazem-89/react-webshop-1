import React, { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';

import classes from './PaymentPage.module.css';

import progressbar3 from '../../../assets/images/progressbar-3.png';
import mastercard from '../../../assets/images/mastercard.png';
import swish from '../../../assets/images/swish.png';
import visa from '../../../assets/images/visa.png';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const PaymentPage = () => {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            picked: '',
        },
        onSubmit: values => {
            if (values.picked === 'mastercard' || values.picked === 'visa') {
                navigate('/checkout/payment/card')
            } else if (values.picked === 'swish') {
                navigate('/checkout/payment/swish')
            } else {
                return;
            }
        }
    });

    return (
        <Fragment>
            <div className={classes['checkout-header']}>
                <img src={progressbar3} alt="" />
            </div>
            <form className={classes['delivery-form']} onSubmit={formik.handleSubmit}>
                <div className={classes['form-title']}>
                    <h2>Payment</h2>
                </div>
                <div className={classes['delivery-form-holder']} role='group' aria-labelledby="my-radio-group">
                    <div className={classes['del-container']}>
                        <img src={mastercard} alt="" />
                        <input
                            id="name"
                            name="picked"
                            type="radio"
                            onChange={formik.handleChange}
                            value='mastercard'
                        />
                    </div>

                    <div className={classes['del-container']}>
                        <img src={swish} alt="" />
                        <input
                            id="email"
                            name="picked"
                            type="radio"
                            onChange={formik.handleChange}
                            value='swish'
                        />
                    </div>

                    <div className={classes['del-container']}>
                        <img src={visa} alt="" />
                        <input
                            id="phone"
                            name="picked"
                            type="radio"
                            onChange={formik.handleChange}
                            value='visa'
                        />
                    </div>
                </div>

                <div className={classes['form-btn-container']}>
                    <button type='button' className={classes['exit-btn']} onClick={() => navigate(-1)}>BACK</button>
                    <button className={classes['form-btn']} type="submit">
                        <div className={classes['btn-text-separator']}>
                            <span>PAYMENT</span>
                            <ArrowForwardIosIcon style={{ fontSize: 20 }} />
                        </div>
                    </button>
                </div>
            </form>
        </Fragment>
    );
}

export default PaymentPage;