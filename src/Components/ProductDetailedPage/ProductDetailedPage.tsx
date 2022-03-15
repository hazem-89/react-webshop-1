import { useContext } from 'react';
import { useParams } from "react-router-dom"
import { DUMMY_PRODUCTS } from "../Products/AvailableProducts";

import classes from './ProductDetailedPage.module.css';
import CartContext from '../../Store/CartContext';
import DetailedProductAddBtn from './DetailedProductAddBtn';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const ProductDetailedPage = () => {
    const { productId } = useParams()
    const product = DUMMY_PRODUCTS.find(prod => prod.id === productId)

    const cartCtx = useContext(CartContext);

    const addToCartHandler = (amount: number) => {
        cartCtx.addItem({
            id: product!.id,
            name: product!.name,
            amount: amount,
            price: product!.price,
            image: product!.image,
            description: '',
        });
    };

    return (
        <div className={classes.container}>
            <div className={classes.image} style={{ backgroundImage: `url(${product!.image})` }}></div>
            <div className={classes['info-container']}>
                <div className={classes['info-text']}>
                    <h2>{product!.name}</h2>
                    <p>{product!.description}</p>
                    <p>{product!.price}:-</p>
                </div>
                <div className={classes['info-desc']}>
                    <p>Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex.</p>
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