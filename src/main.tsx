import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { NextUIProvider } from '@nextui-org/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './pages/cart/cart.tsx';
import Home from './pages/cart/home.tsx';
ReactDOM.createRoot(document.getElementById('root')!).render(

  <NextUIProvider>
    <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </BrowserRouter>
  </NextUIProvider>

)
