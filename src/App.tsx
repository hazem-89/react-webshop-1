import { Drawer } from "@material-ui/core";
import { useState, useEffect } from "react";
import MainPage from "./Components/MainPage/MainPage";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Badge from "@material-ui/core/Badge";
import Grid from "@material-ui/core/Grid";
import { CartItemType } from './data';
import Item from './Components/Item/Item';

//style
import { Wrapper, StyledCart } from "./App.style"

  interface Props {
    item: CartItemType;
  }
  function App() {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [data, setData] = useState([])

    const handelAddToCart = (clickedItem: CartItemType) => null;
    const url = 'https://fakestoreapi.com/products';
    useEffect (() => {
      fetch(url)
      .then(res => {
        return res.json()
      })
      .then(data => {
        const product = data;
        setData(product)
        console.log(product);
      })
    })
    return (
    <Wrapper>
      <div className="main-Container">
        <Drawer anchor='right' open={isCartOpen} onClose={() => setIsCartOpen(false)}>
          Cart goes here 
        </Drawer>
        <StyledCart onClick={() => setIsCartOpen(true)}>
        <Badge  color='error'>
            <AddShoppingCartIcon />
        </Badge>
        </StyledCart>
        <Grid container spacing={3} >
        {data?.map(item => (
          <Grid item key={item.id} xs='auto' sm={4}>
            <Item item={item} handelAddToCart={handelAddToCart} />
          </Grid>
        ))}
      </Grid>
        <MainPage />
      </div>
    </Wrapper>
  )
  }

export default App;



