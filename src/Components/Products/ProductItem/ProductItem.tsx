import { SetStateAction, useContext, useState } from 'react';

import classes from './ProductItem.module.css';
import ProductItemAddBtn from './ProductItemAddBtn';
import CartContext from '../../../Store/CartContext';
import { Fragment } from 'react';
import Select from 'react-select'


import { Link } from "react-router-dom";
import { sizeOptions } from '../../../FilterData';
import { Controller, useForm } from "react-hook-form";
// import FilterComponent from './FilterComponent';

const ProductItem = (props: { price: number; id: string; name: string; brand: string; image: string; description: string; amount: number }) => {
    const cartCtx = useContext(CartContext);
    const price = `${props.price},00:-`;
    const [size, setSize] = useState({});
    const selectedSize = size;
    const { control } = useForm();

    const addToCartHandler = (amount: number) => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price,
            image: props.image,
            brand: props.brand,
            description: '',
            size: selectedSize
        });
    };
    const handleChange = (e: any) => {
        setSize(e.value);
    }

    return (
        <Fragment>
            <Link to={props.id}>
                <li className={classes.product}>
                    <div>
                        <h3>{props.name}</h3>
                        <div className={classes.brand}>{props.brand}</div>
                        <div className={classes.price}>{price}</div>
                    </div>
                </li>
            </Link>
            {/* <div className={classes.select}>
                <h2>Available Sizes</h2>
                <FilterComponent /></div> */}
            <Controller
                control={control}
                rules={{ required: true }}
                name="size"
                render={() => (
                    <Select
                        value={sizeOptions.find(obj => obj.value === size)}
                        options={sizeOptions}
                        className='mb-3'
                        placeholder='Size'
                        isSearchable
                        autoFocus
                        onChange={handleChange}
                    />
                )}
            />
            <div>
                <ProductItemAddBtn onAddToCart={addToCartHandler} />
            </div>
        </Fragment>
    );
}

export default ProductItem;