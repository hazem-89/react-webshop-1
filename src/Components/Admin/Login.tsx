import React from "react";
import {FormikErrors, useFormik} from 'formik';
import { useNavigate } from "react-router-dom";

import classes from './Login.module.css';
import { Fragment } from "react";
import { AdminUser } from "../../data";
import TextField from '@mui/material/TextField';

interface FormValues {
    email: string;
    password: string;
}

const adminUser: AdminUser = {
    adminName: 'Admin@shoe.com',
    adminPassword: '123456789',
}

const validate = (values: FormValues) => {
    const errors: FormikErrors<FormValues> = {};

    if (!values.email) {
      errors.email = 'Required';
    } else if (values.email !== adminUser.adminName) {
      errors.email = 'Invalid email';
    }
 
    if (!values.password) {
      errors.password = 'Required';
    } else if (values.password !== adminUser.adminPassword) {
      errors.password = 'Invalid password';
    }
    
    return errors;
};

const Login = () => {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validate,
        onSubmit: values => {
            navigate('/admin');
        }
    });

    return(
        <Fragment>
            <form className={classes['information-form']} onSubmit={formik.handleSubmit}>
                <div className={classes['form-title']}>
                    <h2>Admin Login</h2>
                </div>
                <div className={classes['email-input-container' && 'input-container']}>
                    <label htmlFor="email">Email</label>
                    <TextField 
                        name="email"
                        id="email" 
                        variant="outlined" 
                        placeholder="Admin@shoe.com"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? <div className={classes.error}>{formik.errors.email}</div> : null}
                </div>

                <div className={classes['name-input-container' && 'input-container']}>
                    <label htmlFor="password">Password</label>
                    <TextField
                        id="password"
                        name="password"
                        type="password"
                        placeholder="**********"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                    />
                    {formik.touched.password && formik.errors.password ? <div className={classes.error}>{formik.errors.password}</div> : null}
                </div>

                <div className={classes['form-btn-container']}>
                    <button className={classes['exit-btn']} onClick={() => navigate(-1)}>EXIT</button>
                    <button className={classes['form-btn']} type="submit"><span>LOGIN</span></button>
                </div>
            </form>
        </Fragment>
    );
}

export default Login;