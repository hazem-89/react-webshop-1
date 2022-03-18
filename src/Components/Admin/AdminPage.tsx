import { Fragment } from "react";
import classes from './AdminPage.module.css';
import image from '../../assets/images/Group 40.png';
import { useFormik } from "formik";

const AdminPage = () => {
    const formik = useFormik({
        initialValues: {
            title: '',
            brand: '',
            price: '',
            size: '',
            description: '',
        },
        onSubmit: values => {

        }
    });
    
    return(
        <Fragment>
            <form className={classes['form']}>
                <h2 className={classes['admin-title']}>Add new product</h2>
                <div className={classes['form-container']}>
                    <div className={classes['image-container']}>
                        <img src={image} alt="" />
                    </div>
                    <div className={classes['input-container']}>
                        <div className={classes['title-input-container' && 'input-item']}>
                            <label htmlFor="title">Title</label>
                            <input
                                id="title"
                                name="title"
                                type="title"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.title}
                            />
                            {formik.touched.title && formik.errors.title ? <div className={classes.error}>{formik.errors.title}</div> : null}
                        </div>

                        <div className={classes['brand-input-container' && 'input-item']}>
                            <label htmlFor="brand">Brand</label>
                            <input
                                id="brand"
                                name="brand"
                                type="brand"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.brand}
                            />
                            {formik.touched.brand && formik.errors.brand ? <div className={classes.error}>{formik.errors.brand}</div> : null}
                        </div>

                        <div className={classes['price-size-container']}>
                            <div className={classes['price-input-container']}>
                                <label htmlFor="price">Price</label>
                                <input
                                    id="price"
                                    name="price"
                                    type="price"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.price}
                                />
                                {formik.touched.price && formik.errors.price ? <div className={classes.error}>{formik.errors.price}</div> : null}
                            </div>
                            <div className={classes['size-input-container']}>
                                <label htmlFor="size">Size</label>
                                <input
                                    id="size"
                                    name="size"
                                    type="size"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.size}
                                />
                                {formik.touched.size && formik.errors.size ? <div className={classes.error}>{formik.errors.size}</div> : null}
                            </div>
                        </div>

                        <div className={classes['description-input-container' && 'input-item']}>
                            <label htmlFor="description">Description</label>
                            <textarea
                                id="description"
                                name="description"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.description}
                            />
                            {formik.touched.description && formik.errors.description ? <div className={classes.error}>{formik.errors.description}</div> : null}
                        </div>

                        <div className={classes['form-btn-container']}>
                            <button className={classes['form-btn']} type="submit">ADD PRODUCT</button>
                        </div>
                    </div>
                </div>
            </form>
        </Fragment>
    );
}

export default AdminPage;