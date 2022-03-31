import React from "react";
import { FormikErrors, useFormik } from 'formik';
import { useNavigate } from "react-router-dom";

import classes from './UserInfoPage.module.css';
import { Fragment } from "react";

import progressbar1 from '../../../assets/images/progressbar-1.png';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TextField from '@mui/material/TextField';
import { UserData } from "../../../data";
import CheckoutHeader from "../CheckoutHeader";

interface Props {
    savedUserData: (deliveryData: UserData) => void;
}

const validate = (values: UserData) => {
    const errors: FormikErrors<UserData> = {};

    if (!values.name) {
        errors.name = 'Required';
    } else if (values.name.length > 15 || values.name.length < 2) {
        errors.name = 'Must be between 2 and 15 characters';
    }

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.phone) {
        errors.phone = 'Required';
    } else if (values.phone.length > 10 || values.phone.length < 10) {
        errors.phone = 'Must be 10 characters';
    }

    if (!values.address) {
        errors.address = 'Required';
    }

    return errors;
};

const UserInfoPage = (props: Props) => {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            address: '',
        },
        validate,
        onSubmit: values => {
            const userData: UserData = values;
            props.savedUserData(userData);
        }
    });

    return (
        <Fragment>
            <CheckoutHeader />
            <div className={classes['checkout-header']}>
                <ArrowBackIcon className={classes['arrow-back-icon-btn']} onClick={() => navigate(-1)}/>
                <img src={progressbar1} alt="" />
            </div>
            <form className={classes['information-form']} onSubmit={formik.handleSubmit} autoComplete="off">
                <div className={classes['form-title']}>
                    <h2>User information</h2>
                </div>
                <div className={classes['name-input-container' && 'input-container']}>
                    <label htmlFor="name">First & last name</label>
                    <TextField
                        id="frmNameA"
                        name="name"
                        type="text"
                        placeholder="name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                        autoComplete="name"
                    />
                    {formik.touched.name && formik.errors.name ? <div className={classes.error}>{formik.errors.name}</div> : null}
                </div>

                <div className={classes['email-input-container' && 'input-container']}>
                    <label htmlFor="email">Email</label>
                    <TextField
                        id="frmEmailA"
                        name="email"
                        type="email"
                        placeholder="name@example.com"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        autoComplete="email"
                    />
                    {formik.touched.email && formik.errors.email ? <div className={classes.error}>{formik.errors.email}</div> : null}
                </div>

                <div className={classes['phone-input-container' && 'input-container']}>
                    <label htmlFor="phone">Phone</label>
                    <TextField
                        id="frmPhoneNumA"
                        name="phone"
                        type="tel"
                        placeholder="0701234567"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.phone}
                        autoComplete="tel"

                    />
                    {formik.touched.phone && formik.errors.phone ? <div className={classes.error}>{formik.errors.phone}</div> : null}
                </div>

                <div className={classes['adress-input-container' && 'input-container']}>
                    <label htmlFor="address">Address</label>
                    <TextField
                        id="address"
                        name="address"
                        type="address"
                        placeholder="Baker Street 221b"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.address}
                    />
                    {formik.touched.address && formik.errors.address ? <div className={classes.error}>{formik.errors.address}</div> : null}
                </div>

                <div className={classes['form-btn-container']}>
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

export default UserInfoPage;