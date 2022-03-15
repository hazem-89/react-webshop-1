import { MouseEventHandler, useContext, useEffect, useState } from 'react';
import { Product } from '../../data';

import CartContext from '../../Store/CartContext';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props: { onClick: MouseEventHandler<HTMLButtonElement> | undefined; }) => {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const [btnHasColor, setBtnHasColor] = useState(false);
    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce((curNumber, item: Product) => {
        return curNumber + item.amount;
    }, 0);

    const { items } = cartCtx;

    const btnClasses = `${classes.button} ${btnHasColor ? classes.colorchange : ''} ${btnIsHighlighted ? classes.bump : ''}`;

    useEffect(() => {
        if (items.length === 0) {
            setBtnHasColor(false);
            return;
        }
        setBtnIsHighlighted(true);
        setBtnHasColor(true);

        setTimeout(() => {
            setBtnIsHighlighted(false);
        }, 300);
    }, [items]);

    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.badge}>
                {numberOfCartItems}
            </span>
        </button>
    );
}

export default HeaderCartButton;