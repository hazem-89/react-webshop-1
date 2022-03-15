import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import CartProvider from "./Store/cart-provider";

import { Product } from "./data";
import Header from "./Components/Layout/Header";
import Products from "./Components/Products/Products";
import Cart from "./Components/Cart/Cart";
import ProductDetailedPage from "./Components/ProductDetailedPage/ProductDetailedPage";
import UserInfoPage from "./Components/PaymentSection/userInfoPage/UserInfoPage";
import DeliveryPage from "./Components/PaymentSection/DeliveryPage/DeliveryPage";
import PaymentPage from "./Components/PaymentSection/PaymentPage/PaymentPage";
import ConfirmationPage from "./Components/PaymentSection/ConfirmationPage/ConfirmationPage";
import CardPaymentPage from "./Components/PaymentSection/PaymentPage/CardPaymentPage";
import SwishPaymentPage from "./Components/PaymentSection/PaymentPage/SwishPaymentPage";

interface Props {
  item: Product;
}
function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const showCartHandler = () => {
    setIsCartOpen(true)
  }
  const hideCartHandler = () => {
    setIsCartOpen(false)
  }

  return (
    <Routes>
      <Route path="/" element={
        <CartProvider>
          {isCartOpen && <Cart onClose={hideCartHandler} />}
          <Header onShowCart={showCartHandler} />
          <main>
            <Products />
          </main>
        </CartProvider>
      } />
      <Route path=":productId" element={
        <CartProvider>
          {isCartOpen && <Cart onClose={hideCartHandler} />}
          <Header onShowCart={showCartHandler} />
          <ProductDetailedPage />
        </CartProvider>
      } />
      <Route path="checkout/user-info" element={<UserInfoPage />} />
      <Route path="checkout/delivery" element={<DeliveryPage />} />
      <Route path="checkout/payment" element={<PaymentPage />} />
      <Route path="checkout/payment/card" element={<CardPaymentPage />} />
      <Route path="checkout/payment/swish" element={<SwishPaymentPage />} />
      <Route path="checkout/confirmation" element={<ConfirmationPage />} />
    </Routes>
  );
}

export default App;



