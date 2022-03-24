import { useNavigate } from 'react-router-dom';
import { FormikErrors, useFormik } from 'formik';

import classes from './CardPaymentPage.module.css';
import { Fragment, useContext } from "react";

import progressbar3 from '../../../assets/images/progressbar-3.png';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { DeliveryData, PaymentData } from '../../../data';
import CartContext from '../../../Store/CartContext';
import { useKey } from '../../../Store/ConfirmationContext';
import TextField from '@mui/material/TextField';

interface FormValues {
    cardNumber: string;
    expirationDate: string;
    secureCode: string;
}

interface Props {
    savedPaymentData: (paymentData: PaymentData) => void;
    deliveryData?: DeliveryData;
}

const validate = (values: FormValues) => {
    const errors: FormikErrors<FormValues> = {};

    if (!values.cardNumber) {
        errors.cardNumber = 'Required';
    } else if (values.cardNumber.length > 19 || values.cardNumber.length < 19) {
        errors.cardNumber = 'Must be 16 characters. Ex: xxxx xxxx xxxx xxxx';
    }

    if (!values.expirationDate) {
        errors.expirationDate = 'Required';
    } else if (values.expirationDate.length > 4 || values.expirationDate.length < 4) {
        errors.expirationDate = 'Must be 4 characters. Ex: xx/xx';
    }

    if (!values.secureCode) {
        errors.secureCode = 'Required';
    } else if (values.secureCode.length > 3 || values.secureCode.length < 3) {
        errors.secureCode = 'Must be 3 characters. Ex: xxx';
    }

    return errors;
};

const CardPaymentPage = (props: Props) => {
    const { confirm } = useKey();

    const cartCtx = useContext(CartContext);

    const totalAmount = `${(cartCtx.totalAmount + Number(props.deliveryData?.price)).toFixed(2)}:-`;
    const shippingCost = `${props.deliveryData?.price}:-`;

    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            cardNumber: '',
            expirationDate: '',
            secureCode: '',
        },
        validate,
        onSubmit: values => {
            props.savedPaymentData(values);
            confirm();
            navigate('/checkout/confirmation');
        }
    });

    return (
        <Fragment>
            <div className={classes['checkout-header']}>
                <img src={progressbar3} alt="" />
            </div>
            <form id="usrForm" className={classes['card-payment-form']} onSubmit={formik.handleSubmit} autoComplete="on">
                <div className={classes['form-title']}>
                    <h2>Payment<span> - card</span></h2>
                </div>

                <div className={classes['input-container']}>
                    <label htmlFor="cc-number">Card number</label>
                    <TextField
                        id="cardNumber"
                        name="cc-number"
                        type="cardNumber"
                        autoComplete="cc-number"
                        placeholder='**** **** **** ****'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.cardNumber
                            .replace(/\s/g, "")
                            .replace(/(\d{4})/g, "$1 ")
                            .trim()}
                    />
                    {formik.touched.cardNumber && formik.errors.cardNumber ? <div className={classes.error}>{formik.errors.cardNumber}</div> : null}
                </div>

                <div className={classes['card-info-bottom-container']}>
                    <div className={classes['expiration-input-container']}>
                        <label htmlFor="cc-exp">Expiration date</label>
                        <TextField
                            id="expirationDate"
                            name="cc-exp"
                            autoComplete="cc-exp"
                            type="expirationDate"
                            placeholder='01/21'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.expirationDate}
                        />
                        {formik.touched.expirationDate && formik.errors.expirationDate ? <div className={classes.error}>{formik.errors.expirationDate}</div> : null}
                    </div>
                    <div className={classes['secure-input-container']}>
                        <label htmlFor="secureCode">Secure code</label>
                        <TextField
                            id="secureCode"
                            name="secureCode"
                            type="secureCode"
                            placeholder='***'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.secureCode}
                        />
                        {formik.touched.secureCode && formik.errors.secureCode ? <div className={classes.error}>{formik.errors.secureCode}</div> : null}
                    </div>
                </div>

                <div className={classes['total-cost-container']}>
                    <div className={classes['taxes-box' && 'cost-box']}>
                        <span>taxes</span>
                        <span>25%</span>
                    </div>
                    <div className={classes['shipping-box' && 'cost-box']}>
                        <span>shipping</span>
                        <span>{shippingCost}</span>
                    </div>
                    <div className={classes['total-cost-box' && 'cost-box']}>
                        <h3>TOTAL</h3>
                        <h3>{totalAmount}</h3>
                    </div>
                </div>

                <div className={classes['form-btn-container']}>
                    <button className={classes['exit-btn']} onClick={() => navigate(-1)}>BACK</button>
                    <button className={classes['form-btn']} type="submit">
                        <div className={classes['btn-text-separator']}>
                            <span>CONFIRM ORDER</span>
                            <ArrowForwardIosIcon style={{ fontSize: 20 }} />
                        </div>
                    </button>
                </div>
            </form>
        </Fragment>
    );
}

export default CardPaymentPage;