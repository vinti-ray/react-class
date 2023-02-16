import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import ProductPage from "./pages/productPage";
import PaymentPage from './pages/paymentPage';
import ErrorPage from './pages/errorPage';
import HomePage from './pages/homePage';
import RegistrationForm from './registrationForm.js/RegistrationForm';
import SubmitPage from './registrationForm.js/OnSubmit';
import FetchApi from './assignment/assignment';
import Counter from './assignment/counter';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div>
    <div>my brand new App</div>
  <BrowserRouter>
  <Routes>
  <Route path ="/" element={<HomePage/>}/>
 <Route path ="/product" element={<ProductPage/>}/>
 <Route path ="/payment" element={<PaymentPage/>}>
  <Route path =":price" element={<PaymentPage/>}/>
  </Route>
  <Route path ="/registration" element={<RegistrationForm/>}/>
  <Route path ="/submitpage" element={<SubmitPage/>}/>

 <Route path="/fetchapi" element={<FetchApi/>}/>
 <Route path="/counter" element={<Counter/>}/>
 
 <Route path ="*" element={<ErrorPage/>}/>

  </Routes>
  
  </BrowserRouter>
  </div>
 
);

