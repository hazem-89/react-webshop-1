import { Fragment} from "react";
import classes from './AdminPage.module.css';
import { FormikErrors, useFormik } from "formik";
import AdminHeader from "./AdminHeader";
import { Product } from "../../data";

interface Props {
    savedNewProductData: (deliveryData: Product) => void;
}

const validate = (values: Product) => {
    const errors: FormikErrors<Product> = {};
 
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
    
    if (!values.description) {
        errors.description = 'Required';
    }

    if (!values.image) {
        errors.image = 'Required';
    }
    
    return errors;
};

const AdminPage = (props: Props) => {

    const formik = useFormik({
        initialValues: {
            id: Math.random().toString(),
            name: '',
            brand: '',
            price: 0,
            description: '',
            image: '',
            amount: 0,
        },
        validate,
        onSubmit: values => {
            const newProductData = {
                ...values,
            }
            props.savedNewProductData(newProductData);
        }
    });
    
    return(
        <Fragment>
            <AdminHeader />
            <form className={classes['form']} onSubmit={formik.handleSubmit}>
                <h2 className={classes['admin-title']}>Add new product</h2>
                <div className={classes['form-container']}>
                    <div className={classes['input-container']}>
                        <div className={classes['input-item']}>
                            <label htmlFor="name">Title</label>
                            <input
                                id="name"
                                name="name"
                                type="name"
                                placeholder="Product name"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.name}
                            />
                            {formik.touched.name && formik.errors.name ? <div className={classes.error}>{formik.errors.name}</div> : null}
                        </div>

                        <div className={classes['input-item']}>
                            <label htmlFor="brand">Brand</label>
                            <input
                                id="brand"
                                name="brand"
                                type="brand"
                                placeholder="Brand name"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.brand}
                            />
                            {formik.touched.brand && formik.errors.brand ? <div className={classes.error}>{formik.errors.brand}</div> : null}
                        </div>

                        <div className={classes['input-item']}>
                            <label htmlFor="price">Price</label>
                            <input
                                id="price"
                                name="price"
                                type="price"
                                placeholder="999"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.price}
                            />
                            {formik.touched.price && formik.errors.price ? <div className={classes.error}>{formik.errors.price}</div> : null}
                        </div>

                        <div className={classes['input-item']}>
                            <label htmlFor="image">Add Image</label>
                            <input
                                id="image"
                                name="image"
                                type="text"
                                placeholder="https://pictures/image.png"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.image}
                            />
                            {formik.touched.image && formik.errors.image ? <div className={classes.error}>{formik.errors.image}</div> : null}
                        </div>

                        <div className={classes['input-item']}>
                            <label htmlFor="description">Description</label>
                            <textarea
                                id="description"
                                name="description"
                                placeholder="Some product description..."
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