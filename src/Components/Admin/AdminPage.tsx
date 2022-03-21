import { Fragment } from "react";
import classes from './AdminPage.module.css';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { FormikErrors, useFormik } from "formik";
import AdminHeader from "./AdminHeader";
// import { Product } from "../../data";

const validate = (values: any /*Product*/) => {
    const errors: FormikErrors<any/*Product*/> = {};
 
    if (!values.name) {
      errors.name = 'Required';
    } else if (values.name.length > 15 || values.name.length < 2) {
      errors.name = 'Must be between 2 and 15 characters';
    }

    if (!values.brand) {
        errors.brand = 'Required';
      } else if (values.brand.length > 15 || values.brand.length < 2) {
        errors.brand = 'Must be between 2 and 15 characters';
      }

    if (!values.price) {
    errors.price = 'Required';
    } else if (values.brand.length < 2) {
    errors.brand = 'Must be between atleast 2 characters';
    }

    if (!values.size) {
        errors.size = 'Required';
    }
    
    if (!values.description) {
        errors.description = 'Required';
    }

    if (!values.image) {
        errors.image = 'Required';
    }
    
    return errors;
};

const AdminPage = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            brand: '',
            price: 0,
            size: '',
            description: '',
            image: '',
        },
        validate,
        onSubmit: values => {
            console.log(values);
        }
    });
    
    return(
        <Fragment>
            <AdminHeader />
            <form className={classes['form']} onSubmit={formik.handleSubmit}>
                <h2 className={classes['admin-title']}>Add new product</h2>
                <div className={classes['form-container']}>
                    <div className={classes['input-container']}>
                        <div className={classes['title-input-container' && 'input-item']}>
                            <label htmlFor="name">Title</label>
                            <input
                                id="name"
                                name="name"
                                type="name"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.name}
                            />
                            {formik.touched.name && formik.errors.name ? <div className={classes.error}>{formik.errors.name}</div> : null}
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

                        <div className={classes['image-container']}>
                            <label htmlFor="image" className={classes['image-file']}>
                                + Add Image
                            <input
                                id="image"
                                name="image"
                                type="file"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.image}
                            />
                            </label>
                            {formik.touched.image && formik.errors.image ? <div className={classes.error}>{formik.errors.image}</div> : null}
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