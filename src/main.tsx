import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { NextUIProvider } from '@nextui-org/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './pages/cart/cart.tsx';
import Home from './pages/cart/home.tsx';
import User from './pages/cart/user.tsx';
import Friends from './pages/cart/friends.tsx';
import Settings from './pages/cart/settings.tsx';
ReactDOM.createRoot(document.getElementById('root')!).render(

  <NextUIProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/user' element={<User />} />
        <Route path='/friends' element={<Friends />} />
        <Route path='/settings' element={<Settings />} />
      </Routes>
    </BrowserRouter>
  </NextUIProvider>

)
