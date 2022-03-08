import { CartItemType } from '../../data';
import { Button } from "@material-ui/core";
import { Wrapper } from "./Item.style"
import AddIcon from "@material-ui/icons/";


interface Props  {
  item: CartItemType;
  handelAddToCart: (clickedItem: CartItemType) => void;
}

const Item: React.FC<Props> = ({ item, handelAddToCart }) => (
  <Wrapper>
    <div className='pro'>
    <img src={item.image} alt={item.title} />
    <div className='product-container'>
      <h3>{item.title}</h3>
      {/* <p>{item.description}</p> */}
      <p>${item.price}</p>
    </div>
    <Button onClick={() => handelAddToCart(item)}><AddIcon/></Button>
    </div>
    </Wrapper>

)

export default Item;