import { MouseEventHandler } from "react";
import classes from './EditProductModal.module.css';
import { FormikErrors, useFormik } from "formik";
import { Product } from "../../data";
import Modal from "../UI/Modal";
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';


interface Props {
  savedEditedProductData: (editedProductData: Product) => void;
  editProductData: Product[];
  onClose: MouseEventHandler<HTMLButtonElement> | undefined;
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

const EditProductModal = (props: Props) => {

  const formik = useFormik({
    initialValues: {
      id: props.editProductData[0].id,
      name: props.editProductData[0].name,
      brand: props.editProductData[0].brand,
      price: props.editProductData[0].price,
      description: props.editProductData[0].description,
      image: props.editProductData[0].image,
      amount: 0,
    },
    validate,
    onSubmit: (values) => {
      const editedProductData = {
        ...values,
      }
      props.savedEditedProductData(editedProductData);
    }
  });

  return (
    <Modal onClose={props.onClose}>
      <form className={classes['form']} onSubmit={formik.handleSubmit}>
        <div className={classes['form-header']}>
          <h2 className={classes['admin-title']}>Edit product</h2>
          <button className={classes['close-btn']} onClick={props.onClose}><CloseIcon style={{ fontSize: 32 }} /></button>
        </div>
        <div className={classes['form-container']}>
          <div className={classes['input-container']}>
            <div className={classes['input-item']}>
              <label htmlFor="name">Title</label>
              <TextField
                id="name"
                name="name"
                type="name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name ? <div className={classes.error}>{formik.errors.name}</div> : null}
            </div>

            <div className={classes['input-item']}>
              <label htmlFor="brand">Brand</label>
              <TextField
                id="brand"
                name="brand"
                type="brand"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.brand}
              />
              {formik.touched.brand && formik.errors.brand ? <div className={classes.error}>{formik.errors.brand}</div> : null}
            </div>

            <div className={classes['input-item']}>
              <label htmlFor="price">Price</label>
              <TextField
                id="price"
                name="price"
                type="price"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.price}
              />
              {formik.touched.price && formik.errors.price ? <div className={classes.error}>{formik.errors.price}</div> : null}
            </div>

            <div className={classes['input-item']}>
              <label htmlFor="image">Add Image</label>
              <TextField
                id="image"
                name="image"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.image}
              />
              {formik.touched.image && formik.errors.image ? <div className={classes.error}>{formik.errors.image}</div> : null}
            </div>

            <div className={classes['input-item']}>
              <label htmlFor="description">Description</label>
              <TextField
                className={classes['text-area']}
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
    </Modal>
  );
}

export default EditProductModal;