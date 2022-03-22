import classes from './AdminProdItem.module.css';
import { Fragment } from 'react';

const AdminProdItem = (props: { price: number; id: string; name: string; brand: string; image: string; description: string; amount: number }) => {
    const price = `${props.price},00:-`;

    return (
        <Fragment>
            <li className={classes.product}>
                <div>
                    <h3>{props.name}</h3>
                    <div className={classes.brand}>{props.brand}</div>
                    <div className={classes.price}>{price}</div>
                </div>
            </li>
        </Fragment>
    );
}

export default AdminProdItem;