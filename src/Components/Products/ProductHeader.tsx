import classes from './ProductHeader.module.css';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const ProductHeader = () => {
    return(
        <div className={classes['product-header-container']}>
            <h2>Products</h2>
            <div className={classes['sort-container']}>
            <span>Sort by</span>
            <ArrowDropDownIcon style={{fontSize: 35}} />
            </div>
        </div>
    );
}

export default ProductHeader;