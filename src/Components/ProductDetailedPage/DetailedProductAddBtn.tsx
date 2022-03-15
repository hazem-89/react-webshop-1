import classes from './DetailedProductAddBtn.module.css';

const DetailedProductAddBtn = (props: { onAddToCart: (arg0: number) => void; }) => {
    const onClickHandler = () => {
        const amount = 1
        const amountNumber =+ amount;
        props.onAddToCart(amountNumber);
    }

    return(
        <button className={classes['add-btn']} onClick={onClickHandler}>ADD TO CART</button>
    );
}

export default DetailedProductAddBtn;