import { MouseEventHandler, useContext } from 'react';
import { Link } from 'react-router-dom';

import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext from '../../Store/CartContext';
import { Product } from '../../data';

const Cart = (props: { onClose: MouseEventHandler<HTMLButtonElement> | undefined; }) => {
    const cartCtx = useContext(CartContext);

    const totalAmount = `${cartCtx.totalAmount},00:-`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = (id: string, size: any) => {
        cartCtx.removeItem(id, size);
    };

    const cartItemAddHandler = (item: Product) => {
        cartCtx.addItem({ ...item, amount: 1 });
    };

    const cartItems = (
        <ul className={classes['cart-items']}>
            {cartCtx.items.map((item: Product, index: number) => (
                <CartItem
                    key={index}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    image={item.image}
                    size={item.size}
                    onRemove={cartItemRemoveHandler.bind(null, item.id, item.size)}
                    onAdd={cartItemAddHandler.bind(null, item)}
                />
            ))}
        </ul>
    );

    return (
        <Modal onClose={props.onClose}>
            <h2 className={classes.title}>Basket</h2>
            {hasItems ? cartItems : <div className={classes['cart-empty']}>Your Cart is empty</div>}
            <div className={classes.total}>

                {hasItems ? <span className={classes['total-title']}>TOTAL</span> : <div className={classes['cart-e']}></div>}

                {hasItems ? totalAmount : <div className={classes['cart-totalAmount']}></div>}
                {!hasItems && <button className={classes['btn-continue-shopping']} onClick={props.onClose}>continue shopping</button>}
            </div>
            <button className={classes['btn--close']} onClick={props.onClose}><CloseIcon /></button>
            <Link to='/checkout/user-info'>
                {hasItems && <button className={classes['btn--order']} onClick={props.onClose}>
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