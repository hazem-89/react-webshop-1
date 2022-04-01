import AddIcon from '@mui/icons-material/Add';
import classes from './ProductItemAddBtn.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const ProductItemAddBtn = (props: { onAddToCart: (arg0: number) => void; }) => {
    const onClickHandler = () => {
        const amount = 1
        const amountNumber = + amount;
        props.onAddToCart(amountNumber);
        toast.success('Added 1 item to Basket', {
            position: "top-right",
            autoClose: 1200,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            progressClassName: "progressPurple",
            className: "toastt"
            
            });
    }

    return (
        <button className={classes['add-icon']} onClick={onClickHandler}><AddIcon style={{ fontSize: 25 }} /></button>
        
    );
}

export default ProductItemAddBtn