/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import CartProvider from "./Store/cart-provider";
import { DeliveryData, PaymentData, Product, UserData } from "./data";
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
import { DUMMY_PRODUCTS } from "./DummyProducts";
import Faq from "./Components/Faq/FaqPage";
import { DummyFAQ } from "./DummyFAQ";
import Contact from "./Components/Layout/Contact";

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
  const [paymentData, setPaymentData] = useState<PaymentData>();
  const [products, setProducts] = useState<Product[]>(loadProductsFromLS());
  const [editProductData, setEditProductData] = useState<Product[]>([]);

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

  const paymentDataHandler = (savedPaymentData: PaymentData) => {
    setPaymentData(savedPaymentData);
  }

  const newProductHandler = (product: Product) => {
    setProducts((prevProducts) => {
      return [product, ...prevProducts]
    })
  }

  const editProductHandler = (id: string) => {
    setEditProductData(products.filter(product => product.id === id));
  }

  const editedProductHandler = (editedProduct: Product) => {
    setProducts(products.map(product => {
      if (product.id === editedProduct.id) {
        return {
          ...product,
          name: editedProduct.name,
          brand: editedProduct.brand,
          price: editedProduct.price,
          description: editedProduct.description,
          image: editedProduct.image,

        };
      }

      return product;
    }));
  }

  const deleteProductHandler = (id: string) => {
    setProducts(products.filter(product => product.id !== id));
  }

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products))
  }, [products]);

  useEffect(() => {
    if (!userData) return;
    navigate('/checkout/delivery');
  }, [userData]);

  useEffect(() => {
    if (!deliveryData) return;
    navigate('/checkout/payment');
  }, [deliveryData]);


  return (
    <CartProvider>
      <KeyProvider>
        <Routes>
          <Route path="/" element={
            <Fragment>
              {isCartOpen && <Cart onClose={hideCartHandler} />}
              <Header onShowCart={showCartHandler} showSideBar={undefined} />
              <main>
                <Products products={products} />
              </main>
              <Footer />
            </Fragment>
          } />
          <Route path="contact" element={
            <Fragment>
              {isCartOpen && <Cart onClose={hideCartHandler} />}
              <Header onShowCart={showCartHandler} showSideBar={undefined} />
              <Contact />
            </Fragment>
          } />
          <Route path=":productId" element={
            <Fragment>
              {isCartOpen && <Cart onClose={hideCartHandler} />}
              <Header onShowCart={showCartHandler} showSideBar={undefined} />
              <ProductDetailedPage products={products} />
              <Footer />
            </Fragment>
          } />
          <Route path="checkout/user-info" element={<UserInfoPage savedUserData={userDataHandler} />} />
          <Route path="checkout/delivery" element={<DeliveryPage savedDeliveryData={deliveryDataHandler} />} />
          <Route path="checkout/payment" element={<PaymentPage />} />
          <Route path="checkout/payment/card" element={<CardPaymentPage savedPaymentData={paymentDataHandler} deliveryData={deliveryData} />} />
          <Route path="checkout/payment/swish" element={<SwishPaymentPage userData={userData} deliveryData={deliveryData} />} />
          <Route path="checkout/confirmation" element={<ConfirmationPage userData={userData} deliveryData={deliveryData} paymentData={paymentData} />} />
          <Route path="login" element={<Login />} />
          <Route path="contact" element={<Contact />} />
          <Route path="admin" element={<AdminPage
            savedNewProductData={newProductHandler}
            editProductData={editProductData}
            deleteProduct={deleteProductHandler}
            savedEditedProductData={editedProductHandler}
            products={products}
            editProduct={editProductHandler}
          />}
          />
          <Route path="faq" element={
            <Fragment>
              {isCartOpen && <Cart onClose={hideCartHandler} />}
              <Header onShowCart={showCartHandler} showSideBar={undefined} />
              <Faq faqs={DummyFAQ} />
              <Footer />
            </Fragment>
          } />
        </Routes>
      </KeyProvider>
    </CartProvider>
  );
}

export default App;



