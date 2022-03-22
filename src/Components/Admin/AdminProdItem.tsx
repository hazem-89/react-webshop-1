import classes from './AdminProdItem.module.css';
import { Fragment } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

interface Props {
    price: number; id: any; name: string; brand: string; image: string; description: string; amount: number;
    deleteProduct: (id: string) => void;
}

const AdminProdItem = (props: Props) => {
    const price = `${props.price},00:-`;

    const deleteProductHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        const productId = props.id;
        props.deleteProduct(productId);
    }

    return (
        <Fragment>
            <div className={classes['info-container']}>
                <li className={classes.product}>
                    <div>
                        <h3>{props.name}</h3>
                        <div className={classes.brand}>{props.brand}</div>
                        <div className={classes.price}>{price}</div>
                    </div>
                </li>
                <div className={classes['product-btns']}>
                    <button className={classes['edit-btn']}><EditIcon style={{fontSize: 32}} /></button>
                    <button className={classes['delete-btn']} onClick={deleteProductHandler}><DeleteIcon style={{fontSize: 32}} /></button>
                </div>
            </div>
        </Fragment>
    );
}

export default AdminProdItem;