import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomeScreen from './components/Home/HomeScreen'
import LoginScreen from './components/Login/LoginScreen'
import ProtectedRoutes from './components/ProtectedRoutes'
import CartScreen from './components/Cart/CartScreen'
import PurchasesScreen from './components/Purchases/PurchasesScreen'
import HeaderScreen from './components/Shared/HeaderScreen'
import FooterScreen from './components/Shared/FooterScreen'
import ProductScreen from './components/Products/ProductScreen'
import axios from 'axios'

function App() {
  
  // useEffect(() => {

  //   const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users'
  //   const newUser = {      
  //       firstName: "Alvaro",
  //       lastName: "Japa",
  //       email: "alvarojsw@gmail.com",
  //       password: "alvarojsw",
  //       phone: "1234567891",
  //       role: "admin"      
  //   }

  //   axios.post(URL, newUser)
  //     .then(res=>console.log(res.data))
  //     .catch(err => console.log(err.data))
  // },[])
  
  return (
    <div className="App">
      <HeaderScreen/>
      <Routes>
        <Route path='/' element={<HomeScreen/>} />
        <Route path='/login' element={<LoginScreen/>} />\

        <Route element={<ProtectedRoutes/>}>
          <Route path='/cart' element={<CartScreen/>} />
          <Route path='/purchases' element={<PurchasesScreen/>} />
        </Route>
        <Route path='/product/:id' element={<ProductScreen/>} />
      </Routes>
      <FooterScreen/>
    </div>
  )
}

export default App
