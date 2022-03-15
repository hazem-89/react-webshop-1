import { MouseEventHandler, useContext } from 'react';
import { Link } from 'react-router-dom';

import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext, { CartContextState } from '../../Store/CartContext';
import { Product } from '../../data';

const Cart = (props: { onClose: MouseEventHandler<HTMLButtonElement> | undefined; }) => {
    const cartCtx = useContext(CartContext);

    const totalAmount = `${cartCtx.totalAmount.toFixed(2)}:-`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = (id: string) => {
        cartCtx.removeItem(id);
    };

    const cartItemAddHandler = (item: Product) => {
        cartCtx.addItem({ ...item, amount: 1 });
    };

    const cartItems = (
        <ul className={classes['cart-items']}>
            {cartCtx.items.map((item: Product) => (
                <CartItem
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    image={item.image}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    onAdd={cartItemAddHandler.bind(null, item)}
                />
            ))}
        </ul>
    );

    return (
        <Modal onClose={props.onClose}>
            <h2 className={classes.title}>Basket</h2>
            {cartItems}
            <div className={classes.total}>
                <span className={classes['total-title']}>TOTAL</span>
                <span>{totalAmount}</span>
            </div>
            <button className={classes['btn--close']} onClick={props.onClose}><CloseIcon /></button>
            <Link to='/checkout/user-info'>
                {hasItems && <button className={classes['btn--order']}>
                    <div className={classes['button-text-separator']}>
                        <span>CHECKOUT</span>
                        <ArrowForwardIosIcon style={{ fontSize: 20 }} />
                    </div>
                </button>}
            </Link>
        </Modal>
    );
}

export default Cart;