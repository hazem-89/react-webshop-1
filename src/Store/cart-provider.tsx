import { ReactChild, ReactFragment, ReactPortal, useEffect, useReducer } from "react";
import { Product } from "../data";

import CartContext, { CartContextState } from "./CartContext";

const defaultCartState: CartContextState = {
    items: [],
    totalAmount: 0,
}

const cartReducer = (state: any, action: any) => {

    if (action.type === 'ADD') {
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

        const existingCartItemIdex = state.items.findIndex((item: { id: string; size: number }) => item.id === action.item.id && item.size === action.item.size);
        const existingCartItem = state.items[existingCartItemIdex];
        let updatedItems;

        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount,
            }
            updatedItems = [...state.items];
            updatedItems[existingCartItemIdex] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.item);
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        };
    }

    if (action.type === 'REMOVE') {
        const existingCartItemIdex = state.items.findIndex((item: { id: string; size: any }) => item.id === action.id && item.size === action.size);
        const existingItem = state.items[existingCartItemIdex];

        const updatedTotalAmount = state.totalAmount - existingItem.price;

        let updatedItems;
        if (existingItem.amount === 1) {

            updatedItems = state.items.filter((item: { id: string; size: any }) => item.id !== action.id || item.size !== action.size);

        } else {
            const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIdex] = updatedItem;
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        }
    }

    return defaultCartState;
};

const CartProvider = (props: { children: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; }) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState, () => {
        const localBasketData = localStorage.getItem('cartState');
        return localBasketData ? JSON.parse(localBasketData) : defaultCartState;
    });

    const addItemToCartHandler = (item: Product) => {
        dispatchCartAction({ type: 'ADD', item: item });
    };

    const removeItemFromCartHandler = (id: string, size: any) => {
        dispatchCartAction({ type: 'REMOVE', id: id, size: size });
    };

    const clearCart = () => {
        dispatchCartAction(cartState)
    }
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
        clearCart: clearCart,
    }

    useEffect(() => {
        localStorage.setItem('cartState', JSON.stringify(cartState))
    }, [cartState])



    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;