import { useNavigate } from 'react-router-dom';
import { FormikErrors, useFormik } from 'formik';

import classes from './CardPaymentPage.module.css';
import { Fragment } from "react";

import progressbar3 from '../../../assets/images/progressbar-3.png';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface FormValues {
    cardnumber: string;
    expirationdate: string;
    securecode: string;
}

const validate = (values: FormValues) => {
    const errors: FormikErrors<FormValues> = {};

    if (!values.cardnumber) {
        errors.cardnumber = 'Required';
    } else if (values.cardnumber.length > 16 || values.cardnumber.length < 16) {
        errors.cardnumber = 'Must be 16 characters. Ex: xxxx xxxx xxxx xxxx';
    }

    if (!values.expirationdate) {
        errors.expirationdate = 'Required';
    } else if (values.expirationdate.length > 4 || values.expirationdate.length < 4) {
        errors.expirationdate = 'Must be 4 characters. Ex: xx/xx';
    }

    if (!values.securecode) {
        errors.securecode = 'Required';
    } else if (values.securecode.length > 3 || values.securecode.length < 3) {
        errors.securecode = 'Must be 3 characters. Ex: xxx';
    }

    return errors;
};

const CardPaymentPage = () => {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            cardnumber: '',
            expirationdate: '',
            securecode: '',
        },
        validate,
        onSubmit: values => {
            navigate('/checkout/confirmation');
        }
    });

    return (
        <Fragment>
            <div className={classes['checkout-header']}>
                <img src={progressbar3} alt="" />
            </div>
            <form className={classes['card-payment-form']} onSubmit={formik.handleSubmit}>
                <div className={classes['form-title']}>
                    <h2>Payment<span> - card</span></h2>
                </div>

                <div className={classes['input-container']}>
                    <label htmlFor="cardnumber">Card number</label>
                    <input
                        id="cardnumber"
                        name="cardnumber"
                        type="cardnumber"
                        placeholder='**** **** **** ****'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.cardnumber}
                    />
                    {formik.touched.cardnumber && formik.errors.cardnumber ? <div className={classes.error}>{formik.errors.cardnumber}</div> : null}
                </div>

                <div className={classes['card-info-bottom-container']}>
                    <div className={classes['expiration-input-container']}>
                        <label htmlFor="expirationdate">Epiration date</label>
                        <input
                            id="expirationdate"
                            name="expirationdate"
                            type="expirationdate"
                            placeholder='01/21'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.expirationdate}
                        />
                        {formik.touched.expirationdate && formik.errors.expirationdate ? <div className={classes.error}>{formik.errors.expirationdate}</div> : null}
                    </div>
                    <div className={classes['secure-input-container']}>
                        <label htmlFor="securecode">Secure code</label>
                        <input
                            id="securecode"
                            name="securecode"
                            type="securecode"
                            placeholder='***'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.securecode}
                        />
                        {formik.touched.securecode && formik.errors.securecode ? <div className={classes.error}>{formik.errors.securecode}</div> : null}
                    </div>
                </div>

                <div className={classes['form-btn-container']}>
                    <button className={classes['exit-btn']}>EXIT</button>
                    <button className={classes['form-btn']} type="submit">
                        <div className={classes['btn-text-separator']}>
                            <span>DELIVERY</span>
                            <ArrowForwardIosIcon style={{ fontSize: 20 }} />
                        </div>
                    </button>
                </div>
            </form>
        </Fragment>
    );
}

export default CardPaymentPage;