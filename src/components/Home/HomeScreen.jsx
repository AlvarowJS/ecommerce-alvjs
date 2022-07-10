import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllproducts } from '../../store/slices/products.slice'
import FilterProducts from './FilterProducts'
import InputSearch from './InputSearch'
import ProductCard from './ProductCard'
import './style/homeScreen.css'

const HomeScreen = () => {
  
  const [filterCategory, setFilterCategory] = useState()
  const [productSearch, setProductSearch] = useState()
  const [filterProduct, setFilterProduct] = useState()

  const products = useSelector(state => state.products)

  console.log(products, "mis productos")
  
  useEffect(() => {
    if(products) {      
      setFilterProduct(
        products.filter(
          e => e.title.includes(productSearch)))      
    }
  },[productSearch])
  
  
  return (
    <div className='home'>
      <div className='products-search'>
      <InputSearch
        setProductSearch={setProductSearch}          
      />
      </div>
      <div className='products-filter'>
      <FilterProducts/> 
      </div>
      <div className='products-container'>
        {
          filterProduct ?
            filterProduct?.map(product => (
              <ProductCard
                key={product.id}
                product={product}  
              />
            ))
          :
            products.map(product => (
              <ProductCard
                key={product.id}
                product={product}  
              />
            ))
        }
      </div>
    </div>
  )
}

export default HomeScreen