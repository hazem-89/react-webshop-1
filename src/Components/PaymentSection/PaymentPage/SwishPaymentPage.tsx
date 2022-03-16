import { useNavigate } from 'react-router-dom';
import {FormikErrors, useFormik} from 'formik';

import classes from './SwishPaymentPage.module.css';
import { Fragment } from "react";

import progressbar3 from '../../../assets/images/progressbar-3.png';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface FormValues {
    phone: string;
}

const validate = (values: FormValues) => {
    const errors: FormikErrors<FormValues> = {};

    if (!values.phone) {
        errors.phone = 'Required';
    } else if (values.phone.length > 10 || values.phone.length < 10 ) {
        errors.phone = 'Must be 10 characters';
    }
    
    return errors;
};

const SwishPaymentPage = () => {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            phone: '',
        },
        validate,
        onSubmit: values => {
            navigate('/checkout/confirmation');
        }
    });

    return(
        <Fragment>
            <div className={classes['checkout-header']}>
                <img src={progressbar3} alt="" />
            </div>
            <form className={classes['information-form']} onSubmit={formik.handleSubmit}>
                <div className={classes['form-title']}>
                    <h2>Payment<span> - swish</span></h2>
                </div>

                <div className={classes['phone-input-container' && 'input-container']}>
                    <label htmlFor="phone">Phone number</label>
                    <input
                        id="phone"
                        name="phone"
                        type="phone"
                        placeholder='123 456 7890'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.phone}
                    />
                    {formik.touched.phone && formik.errors.phone ? <div className={classes.error}>{formik.errors.phone}</div> : null}
                </div>

                <div className={classes['total-cost-container']}>
                    <div className={classes['taxes-box' && 'cost-box']}>
                        <span>taxes</span>
                        <span>25%</span>
                    </div>
                    <div className={classes['shipping-box' && 'cost-box']}>
                        <span>shipping</span>
                        <span>49:-</span>
                    </div>
                    <div className={classes['total-cost-box' && 'cost-box']}>
                        <h3>TOTAL</h3>
                        <h3>2990:-</h3>
                    </div>
                </div>

                <div className={classes['form-btn-container']}>
                    <button className={classes['exit-btn']}>EXIT</button>
                    <button className={classes['form-btn']} type="submit">
                        <div className={classes['btn-text-separator']}>
                            <span>DELIVERY</span>
                            <ArrowForwardIosIcon style={{fontSize: 20}}/>
                        </div>
                    </button>
                </div>
            </form>
        </Fragment>
    );
}

export default SwishPaymentPage;