import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './landingPage/Home/HomePage';
import {BrowserRouter , Routes , Route} from "react-router-dom"
import Signup from './landingPage/Signup/SignUp';
import PricingPage from './landingPage/pricing/PricingPage';
import AboutPage from './landingPage/about/AboutPage';
import SupportPage from './landingPage/support/SupportPage';
import ProductPage from './landingPage/products/ProductPage';
import Navbar from './landingPage/Navbar';
import Footer from './landingPage/Footer';
import NotFound from './landingPage/NotFound';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<HomePage></HomePage>}></Route>
      <Route path='signup' element={<Signup></Signup>}></Route>
      <Route path='pricing' element={<PricingPage></PricingPage>}></Route>
      <Route path='about' element={<AboutPage></AboutPage>}></Route>
      <Route path='support' element={<SupportPage></SupportPage>}></Route>
      <Route path='products' element={<ProductPage></ProductPage>}></Route>
      <Route path='*' element={<NotFound></NotFound>}></Route>
    </Routes>
    <Footer></Footer>
  </BrowserRouter>
);


