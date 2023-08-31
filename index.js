import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home,TeaCollections, ProductDetails, Mybag, Accountpage, Delivery, PrintReceipt } from '../pages';
import { Header, Footer, Modal} from '../components';
import Payment from '../pages/payment';
import PaymentSuccessfulPage from '../pages/paymentSuccessfulPage';

function MainRoute() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tea-collections' element={<TeaCollections />}></Route>
        <Route path='/product-details' element={<ProductDetails />}></Route>
        <Route path='/modal' element={<Modal />}></Route>
        <Route path='/my-bag' element={<Mybag />}></Route>
        <Route path='/account-page' element={<Accountpage />}></Route>
        <Route path='/delivery' element={<Delivery />}></Route>
        <Route path='/payment' element={<Payment />}></Route>
        <Route path='/payment-successful-page' element={<PaymentSuccessfulPage />}></Route>
        <Route path='/print-receipt' element={<PrintReceipt />}></Route>

      </Routes>
      <Footer />
      
    </BrowserRouter>
  )
}

export default MainRoute;
