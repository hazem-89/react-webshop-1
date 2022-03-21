import { useContext } from 'react';
import { useParams } from "react-router-dom"
import products from "../../App";

import classes from './ProductDetailedPage.module.css';
import CartContext from '../../Store/CartContext';
import DetailedProductAddBtn from './DetailedProductAddBtn';

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Product } from '../../data';

interface Props {
    products: Product[];
}

const ProductDetailedPage = (props: Props) => {
    const { productId } = useParams()
    const product = props.products.find((prod: Product) => prod.id === productId);

    const cartCtx = useContext(CartContext);

    const addToCartHandler = (amount: number) => {
        cartCtx.addItem({
            id: product!.id,
            name: product!.name,
            brand: product!.brand,
            amount: amount,
            price: product!.price,
            image: product!.image,
            description: product!.description,
        });
    };

    return (
        <div className={classes.container}>
            <div className={classes.image} style={{ backgroundImage: `url(${product!.image})` }}></div>
            <div className={classes['info-container']}>
                <div className={classes['info-text']}>
                    <h2>{product!.name}</h2>
                    <p>{product!.brand}</p>
                    <p>{product!.price}:-</p>
                </div>
                <div className={classes['info-desc']}>
                    <p>{product!.description}</p>
                </div>
                <div className={classes['checkout-info-container']}>
                    <div className={classes['checkout-info']}>
                        <CheckCircleOutlineIcon className={classes['check-icon']} />
                        <h4>Pay with Swish </h4>
                        <span> - Choose swish at checkout</span>
                    </div>
                    <div className={classes['checkout-info']}>
                        <CheckCircleOutlineIcon className={classes['check-icon']} />
                        <h4>Free delivery </h4>
                        <span> - Available at checkout</span>
                    </div>
                    <div className={classes['checkout-info']}>
                        <CheckCircleOutlineIcon className={classes['check-icon']} />
                        <h4>Free returns </h4>
                        <span> - Always free</span>
                    </div>
                </div>
                <div className={classes['buttons']}>
                    <button className={classes['size-btn']}>
                        <span>Size</span>
                        <KeyboardArrowDownIcon />
                    </button>
                    <DetailedProductAddBtn onAddToCart={addToCartHandler} />
                </div>
            </div>
        </div>
    );
}

export default ProductDetailedPage;