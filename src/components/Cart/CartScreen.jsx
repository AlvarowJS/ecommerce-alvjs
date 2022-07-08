import axios from 'axios'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import getConfig from '../../utils/getConfig'
import CartInfo from './CartInfo'
import './style/cartScreen.css'

const CartScreen = () => {

  const postPurchase = () => {

    const objPurchase = {
      street: "Green St. 1456",
      colony: "Southwest",
      zipCode: 12345,
      city: "USA",
      references: "Some references"
    }
    
    axios.post(URL, objPurchase, getConfig())
      .then(res => console.log(res.data))
      .catch(err => console.log(err.data))
  }

  const cart = useSelector(state => state.cart)

  return (
    <div>
      <button onClick={postPurchase}>
        <h2>Confirm Purchase</h2>
      </button>
      <h2>My cart</h2>
      {
        cart?.map(productCart => (
          <CartInfo
            key={productCart.id}
            productCart={productCart}
          />
        ))
      }
    </div>
  )
}

export default CartScreen