import style from './Router.module.scss'
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import axios from 'axios'
import Basket from '../components/basket/Basket'
import Wishlist from '../components/wishlist/Wishlist'
import Layout from '../components/layout/Layout'
import Home from '../components/home/Home'

const Router = () => {
  return (

    <BrowserRouter>

      <Routes>

        <Route element={<Layout/>}> 
          <Route path='basket' element={<Basket/>}/>
          <Route path='wishlist' element={<Wishlist/>} />
          <Route path='/' element={<Home/>}/>
        </Route>
        
        </Routes>    

    </BrowserRouter>

  )
}

export default Router