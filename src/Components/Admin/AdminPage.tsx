import { Fragment } from "react";
import classes from './AdminPage.module.css';
import image from '../../assets/images/Group 40.png';
import { useFormik } from "formik";

const AdminPage = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: values => {

        }
    });
    
    return(
        <Fragment>
            <form className={classes['form']}>
                <div className={classes['form-container']}>
                    <div className={classes['image-container']}>
                        <img src={image} alt="" />
                    </div>
                    <div className={classes['input-container']}>
                        <div className={classes['email-input-container' && 'input-container']}>
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Freddie@example.com"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                            />
                            {formik.touched.email && formik.errors.email ? <div className={classes.error}>{formik.errors.email}</div> : null}

                            <div className={classes['email-input-container' && 'input-container']}>
                                <label htmlFor="email">Email</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Freddie@example.com"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                />
                                {formik.touched.email && formik.errors.email ? <div className={classes.error}>{formik.errors.email}</div> : null}
                            </div>
                            <div>
                                <div className={classes['email-input-container' && 'input-container']}>
                                    <label htmlFor="email">Email</label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="Freddie@example.com"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.email}
                                    />
                                    {formik.touched.email && formik.errors.email ? <div className={classes.error}>{formik.errors.email}</div> : null}
                                </div>
                                <div className={classes['email-input-container' && 'input-container']}>
                                    <label htmlFor="email">Email</label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="Freddie@example.com"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.email}
                                    />
                                    {formik.touched.email && formik.errors.email ? <div className={classes.error}>{formik.errors.email}</div> : null}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </Fragment>
    );
}

export default AdminPage;