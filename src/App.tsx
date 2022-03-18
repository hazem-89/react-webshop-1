/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect, useState } from "react";
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
import KeyProvider from "./Store/ConfirmationContext";
import Footer from './Components/Layout/Footer';
import Login from "./Components/Admin/Login";
import AdminPage from "./Components/Admin/AdminPage";

function App() {
  const navigate = useNavigate();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [deliveryData, setDeliveryData] = useState<DeliveryData>();
  const [userData, setUserData] = useState<UserData>();

  const showCartHandler = () => {
    setIsCartOpen(true)
  }
  const hideCartHandler = () => {
    setIsCartOpen(false)
  }

  const userDataHandler = (savedUserData: UserData) => {
    setUserData(savedUserData);
  }

  const deliveryDataHandler = (savedDeliveryData: DeliveryData) => {
    setDeliveryData(savedDeliveryData);
  }

  useEffect(() => {
    if(!userData) return;
    navigate('/checkout/delivery');
  }, [userData]);
  
  useEffect(() => {
    if(!deliveryData) return;
    navigate('/checkout/payment');
  }, [deliveryData]);


  return (
    <CartProvider>
      <KeyProvider>
        <Routes>
          <Route path="/" element={
            <Fragment>
              {isCartOpen && <Cart onClose={hideCartHandler} />}
              <Header onShowCart={showCartHandler} />
              <main>
                <Products />
              </main>
              <Footer />
            </Fragment>
          } />
          <Route path=":productId" element={
            <Fragment>
              {isCartOpen && <Cart onClose={hideCartHandler} />}
              <Header onShowCart={showCartHandler} />
              <ProductDetailedPage />
              <Footer />
            </Fragment>
          } />
          <Route path="checkout/user-info" element={<UserInfoPage savedUserData={userDataHandler} />} />
          <Route path="checkout/delivery" element={<DeliveryPage savedDeliveryData={deliveryDataHandler} />} />
          <Route path="checkout/payment" element={<PaymentPage />} />
          <Route path="checkout/payment/card" element={<CardPaymentPage deliveryData={deliveryData} />} />
          <Route path="checkout/payment/swish" element={<SwishPaymentPage userData={userData} deliveryData={deliveryData} />} />
          <Route path="checkout/confirmation" element={<ConfirmationPage />} />
          <Route path="login" element={<Login />} />
          <Route path="admin" element={<AdminPage />} />
        </Routes>
      </KeyProvider>
    </CartProvider>
  );
}

export default App;



