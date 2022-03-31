import React from "react";
import { Product } from "../data";

export interface CartContextState {
  items: Product[];
  totalAmount: 0;
}

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item: Product) => { },
  removeItem: (id: string, size: any) => { },
  clearCart: () => { }
});

export default CartContext;