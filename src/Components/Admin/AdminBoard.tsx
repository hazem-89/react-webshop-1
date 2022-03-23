import { Fragment, MouseEventHandler } from "react";
import classes from './AdminBoard.module.css';

import { Product } from "../../data";
import ProductItem from "../Products/ProductItem/ProductItem";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import AdminProdItem from "./AdminProdItem";

interface Props {
    products: Product[];
    onShow: MouseEventHandler<HTMLButtonElement> | undefined;
    onEdit: () => void;
    deleteProduct: (id: string) => void;
    editProduct: (id: string) => void;
}

const AdminBoard = (props: Props) => {
    const products = props.products;

    const productsList = products.map(product => (
        <div key={product.id}
            className={classes['product-container']}>
            <div className={classes['product-image']}>
                <img src={product.image} alt="productImage" />
            </div>
            <div className={classes['product-item-container']}>
                <div className={classes['product-info']}>
                    <AdminProdItem
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        brand={product.brand}
                        description={product.description}
                        price={product.price}
                        image={product.image}
                        amount={0}
                        deleteProduct={props.deleteProduct}
                        onEdit={props.onEdit}
                        editProduct={props.editProduct}
                    />
                </div>
            </div>
        </div>
    ))

    return (
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