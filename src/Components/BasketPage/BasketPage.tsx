import React from "react";
import BasketNavBar from "./BasketNavBar";
import BasketProducts from "./BasketProducts";
import TotalAmount from "./TotalAmount";

function BasketPage() {
    return(
        <div>
            <BasketNavBar />
            <h2>Basket</h2>
            <BasketProducts />
            <TotalAmount />
            <button>CHECKOUT</button>
        </div>
    );
}

export default BasketPage;