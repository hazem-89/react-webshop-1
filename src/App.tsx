import { Drawer } from "@material-ui/core";
import { useState } from "react";
import { useEffect } from "react";
import MainPage from "./Components/MainPage/MainPage";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

  
  function App() {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [data, setData] = useState([])
    const handelAddToCart = () => null;
    const url = 'https://fakestoreapi.com/products';
    useEffect (() => {
      fetch(url)
      .then(res => {
        return res.json()
      })
      .then(data => {
        const product = data;
        setData(Product)
        console.log(product);
        
      })
    })
    return (
    <div>
      <Drawer anchor='right' open={isCartOpen} onClose={() => setIsCartOpen(false)}>
        Cart goes here 
      </Drawer>
      <AddShoppingCartIcon />     
      <MainPage />
    </div>
  )}

export default App;



