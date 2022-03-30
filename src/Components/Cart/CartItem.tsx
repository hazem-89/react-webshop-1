import { ReactChild, ReactFragment, ReactPortal, MouseEventHandler } from 'react';
import classes from './CartItem.module.css';

const CartItem = (props: { price: number; image: string | undefined; size: string, name: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; amount: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; onRemove: MouseEventHandler<HTMLButtonElement> | undefined; onAdd: MouseEventHandler<HTMLButtonElement> | undefined; }) => {
  const price = `${props.price},00:-`;

  return (
    <li className={classes['cart-item']}>
      <div className={classes['cart-item-container']}>
        <div className={classes.image}>
          <img src={props.image} alt="images" />
        </div>
        <div className={classes['cart-item-info']}>
          <div className={classes['cart-item-info-top']}>
            <h2>{props.name}</h2>
            <p className={classes.price}>{price}</p>
            <p className={classes.price}>Size: {props.size}</p>
          </div>
          <div className={classes['cart-item-info-bottom']}>
            <div className={classes['bottom-amount']}>
              <p className={classes.amount}> {props.amount}</p>
            </div>
            <div className={classes['bottom-btns']}>
              <button onClick={props.onRemove}>−</button>
              <button onClick={props.onAdd}>+</button>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
