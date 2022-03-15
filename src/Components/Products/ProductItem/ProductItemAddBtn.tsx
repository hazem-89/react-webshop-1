import AddIcon from '@mui/icons-material/Add';
import classes from './ProductItemAddBtn.module.css';

const ProductItemAddBtn = (props: { onAddToCart: (arg0: number) => void; }) => {
    const onClickHandler = () => {
        const amount = 1
        const amountNumber = + amount;
        props.onAddToCart(amountNumber);
    }

    return (
        <button className={classes['add-icon']} onClick={onClickHandler}><AddIcon style={{ fontSize: 25 }} /></button>
    );
}

export default ProductItemAddBtn