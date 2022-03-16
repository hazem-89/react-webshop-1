import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import CartProvider from "./Store/cart-provider";

import { DeliveryData, UserData } from "./data";
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

function App() {
  const navigate = useNavigate();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [deliveryData, setDeliveryData] = useState({});
  const [userData, setUserData] = useState({});

  const showCartHandler = () => {
    setIsCartOpen(true)
  }
  const hideCartHandler = () => {
    setIsCartOpen(false)
  }

  const userDataHandler = (savedUserData: UserData) => {
    setUserData(savedUserData);
    navigate('/checkout/delivery');
  }

  const deliveryDataHandler = (savedDeliveryData: DeliveryData) => {
    setDeliveryData(savedDeliveryData);
    navigate('/checkout/payment');
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
      <Route path="checkout/user-info" element={<UserInfoPage savedUserData={userDataHandler} />} />
      <Route path="checkout/delivery" element={<DeliveryPage savedDeliveryData={deliveryDataHandler} />} />
      <Route path="checkout/payment" element={<PaymentPage />} />
      <Route path="checkout/payment/card" element={<CardPaymentPage />} />
      <Route path="checkout/payment/swish" element={<SwishPaymentPage />} />
      <Route path="checkout/confirmation" element={<ConfirmationPage />} />
    </Routes>
  );
}

export default App;



