import style from './Router.module.scss'
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import axios from 'axios'
import Card from '../components/card/Card'
import Basket from '../components/basket/Basket'
import Header from '../components/header/Header'
import Wishlist from '../components/wishlist/Wishlist'
import Layout from '../components/layout/Layout'

const Router = () => {
  
  const [data, setData] = useState([])

  const getData = () => {

    axios.get("https://fakestoreapi.com/products").then((res) => setData(res.data))

  }

  useEffect(() => {
    getData()
  }, [])

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