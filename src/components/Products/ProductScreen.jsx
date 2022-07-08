import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './style/productScreen.css'
const ProductScreen = () => {
    const [product, setProduct] = useState()
    const [indexClass, setIndexClass] = useState(0)

    const {id} = useParams()
    console.log(id)
    useEffect(() => {
      const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`
      axios.get(URL)
        .then(res => setProduct(res.data.data.product))
        .catch(err => console.log(err))
    }, [])
    
    console.log(product)
  return (
    <div className='product'>
      <div className='slider'>
          <div className='slider__prev'>&#60;</div>
          <div className='slider__container'>
            {
              product?.productImgs.map(imgSrc => (
                <img 
                  className='slider__imgs'
                  key={imgSrc}
                  src={imgSrc} 
                  alt="" 
                />
              ))                              
            }
          </div>
          <div className='slider__next'>&#62;</div>
      </div>
    </div>
  )
}

export default ProductScreen