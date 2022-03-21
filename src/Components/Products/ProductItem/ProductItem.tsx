import { useContext } from 'react';

import classes from './ProductItem.module.css';
import ProductItemAddBtn from './ProductItemAddBtn';
import CartContext from '../../../Store/CartContext';
import { Fragment } from 'react';

import { Link } from "react-router-dom";

const ProductItem = (props: { price: number; id: string; name: string; brand: string; image: string; description: string; amount: number }) => {
    const cartCtx = useContext(CartContext);
    const price = `${props.price},00:-`;

    const addToCartHandler = (amount: number) => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price,
            image: props.image,
            brand: props.brand,
            description: '',
        });
    };

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
            <div>
                <ProductItemAddBtn onAddToCart={addToCartHandler} />
            </div>
        </Fragment>
    );
}

export default ProductItem;