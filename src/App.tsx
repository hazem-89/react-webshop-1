/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import CartProvider from "./Store/cart-provider";

import { DeliveryData, Product, UserData } from "./data";
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

import img1 from './assets/images/img-1.jpeg';
import img2 from './assets/images/img-2.jpeg';
import img3 from './assets/images/img-3.jpeg';
import img4 from './assets/images/img-4.jpeg';
import img5 from './assets/images/img-5.jpeg';
import img6 from './assets/images/img-6.jpeg';
import img7 from './assets/images/img-7.jpeg';
import img8 from './assets/images/img-8.jpeg';
import img9 from './assets/images/img-9.jpeg';

export const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    name: 'Chunky sneakers',
    brand: 'New Balance',
    description: `Lorem ipsum dolor sit amet, consectetur
    adipiscing elit, sed do eiusmod tempor incididunt
    ut labore et dolore magna aliqua. Ut enim ad
    minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex.`,
    price: 799,
    image: img1,
    amount: 0,
  },
  {
    id: 'p2',
    name: 'Soft sneakers',
    brand: 'Vans',
    description: `Lorem ipsum dolor sit amet, consectetur
    adipiscing elit, sed do eiusmod tempor incididunt
    ut labore et dolore magna aliqua. Ut enim ad
    minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex.`,
    price: 499,
    image: img2,
    amount: 0,
  },
  {
    id: 'p3',
    name: 'Streeter Vol. Max',
    brand: 'Nikitoe',
    description: `Lorem ipsum dolor sit amet, consectetur
    adipiscing elit, sed do eiusmod tempor incididunt
    ut labore et dolore magna aliqua. Ut enim ad
    minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex.`,
    price: 699,
    image: img3,
    amount: 0,
  },
  {
    id: 'p4',
    name: 'Exo black No.2',
    brand: 'Reuse',
    description: `Lorem ipsum dolor sit amet, consectetur
    adipiscing elit, sed do eiusmod tempor incididunt
    ut labore et dolore magna aliqua. Ut enim ad
    minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex.`,
    price: 999,
    image: img4,
    amount: 0,
  },
  {
    id: 'p5',
    name: 'BlendIn sneakers',
    brand: 'Vans',
    description: `Lorem ipsum dolor sit amet, consectetur
    adipiscing elit, sed do eiusmod tempor incididunt
    ut labore et dolore magna aliqua. Ut enim ad
    minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex.`,
    price: 1099,
    image: img5,
    amount: 0,
  },
  {
    id: 'p6',
    name: 'Red hot chilli',
    brand: 'New Balance',
    description: `Lorem ipsum dolor sit amet, consectetur
    adipiscing elit, sed do eiusmod tempor incididunt
    ut labore et dolore magna aliqua. Ut enim ad
    minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex.`,
    price: 899,
    image: img6,
    amount: 0,
  },
  {
    id: 'p7',
    name: 'HikerMax pro',
    brand: 'Americano',
    description: `Lorem ipsum dolor sit amet, consectetur
    adipiscing elit, sed do eiusmod tempor incididunt
    ut labore et dolore magna aliqua. Ut enim ad
    minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex.`,
    price: 1299,
    image: img7,
    amount: 0,
  },
  {
    id: 'p8',
    name: 'SpeedUp',
    brand: 'New Balance',
    description: `Lorem ipsum dolor sit amet, consectetur
    adipiscing elit, sed do eiusmod tempor incididunt
    ut labore et dolore magna aliqua. Ut enim ad
    minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex.`,
    price: 1099,
    image: img8,
    amount: 0,
  },
  {
    id: 'p9',
    name: 'balance',
    brand: 'Vans',
    description: `Lorem ipsum dolor sit amet, consectetur
    adipiscing elit, sed do eiusmod tempor incididunt
    ut labore et dolore magna aliqua. Ut enim ad
    minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex.`,
    price: 699,
    image: img9,
    amount: 0,
  },
];

const loadProductsFromLS = () => {
  const localProducts = localStorage.getItem('products');
  if (localProducts) {
    const productItems = JSON.parse(localProducts);
    return productItems;
  } else {
    return DUMMY_PRODUCTS;
  }
}

function App() {
  const navigate = useNavigate();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [deliveryData, setDeliveryData] = useState<DeliveryData>();
  const [userData, setUserData] = useState<UserData>();
  const [products, setProducts] = useState<Product[]>(loadProductsFromLS());
  
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

  const newProductHandler = (product: Product) => {
    setProducts((prevProducts) => {
      return [product, ...prevProducts]
    })
  }

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products))
  }, [products]);

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
                <Products products={products} />
              </main>
              <Footer />
            </Fragment>
          } />
          <Route path=":productId" element={
            <Fragment>
              {isCartOpen && <Cart onClose={hideCartHandler} />}
              <Header onShowCart={showCartHandler} />
              <ProductDetailedPage products={products} />
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
          <Route path="admin" element={<AdminPage savedNewProductData={newProductHandler} products={products}/>} />
        </Routes>
      </KeyProvider>
    </CartProvider>
  );
}

export default App;



