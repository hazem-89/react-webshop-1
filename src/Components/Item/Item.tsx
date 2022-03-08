import { CartItemType } from '../../data';
import { Button } from "@material-ui/core";

type Props = {
  item: CartItemType;
  handelAddToCart: (clickedItem: CartItemType) => void;
}
const Item: React.FC<Props> = ({item, handelAddToCart}) => {
  return (
  <div>
    <img src={item.image} alt={item.title} />
    <div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <h3>${item.price}</h3>
    </div>
    <Button onClick={() => handelAddToCart(item)}>Add</Button>
    </div>
)  
}

export default Item;