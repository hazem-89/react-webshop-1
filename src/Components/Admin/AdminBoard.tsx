import { Fragment, MouseEventHandler } from "react";
import classes from './AdminBoard.module.css';

import { Product } from "../../data";
import ProductItem from "../Products/ProductItem/ProductItem";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';

interface Props {
    products: Product[];
    onShow: MouseEventHandler<HTMLButtonElement> | undefined;
  }

const AdminBoard = (props: Props) => {
    const products = props.products;

    const productsList = products.map(product => (
        <div className={classes['product-container']}>
            <div className={classes['product-image']}> 
                <img src={product.image} alt="productImage" />
            </div>
            <div className={classes['product-info']}>
                <ProductItem
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    brand={product.brand}
                    description={product.description}
                    price={product.price}
                    image={product.image} 
                    amount={0}
                />
            </div>
            <div className={classes['product-btns']}>
                <button className={classes['edit-btn']}><EditIcon style={{fontSize: 32}} /></button>
                <button className={classes['delete-btn']}><DeleteIcon style={{fontSize: 32}} /></button>
            </div>
        </div>
    ))

    return(
        <Fragment>
            <div className={classes.board}>
                <div className={classes['board-container']}>
                    <div className={classes['board-data-container']}>
                        <div className={classes['board-header']}>
                            <h2>Products</h2>
                            <button className={classes['add-btn']} onClick={props.onShow}><AddIcon style={{ fontSize: 25 }} /></button>
                        </div>
                        {productsList}
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default AdminBoard;