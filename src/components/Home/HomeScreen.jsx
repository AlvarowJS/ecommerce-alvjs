import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllproducts } from '../../store/slices/products.slice'
import FilterProducts from './FilterProducts'
import InputSearch from './InputSearch'
import ProductCard from './ProductCard'
import './style/homeScreen.css'

const HomeScreen = () => {

  const [filterCategory, setFilterCategory] = useState(0)
  const [productSearch, setProductSearch] = useState('')
  const [filterProduct, setFilterProduct] = useState(null)
  const [filterPrice, setFilterPrice] = useState({})

  const products = useSelector(state => state.products)

  console.log(products, "mis productos")

  useEffect(() => {    
      const filter = products?.filter(e => { 
        
        const fromNumber = filterPrice['from'] ? parseFloat(filterPrice['from']) : 0
        const toNumber = filterPrice['to'] ? parseFloat(filterPrice['to']) : 0
        const priceNumber = parseFloat(e.price)

        if((filterCategory === e.category.id || filterCategory === 0) && 
            e.title.toLowerCase().includes(productSearch?.toLowerCase()) && 
            (priceNumber >= fromNumber && priceNumber <= toNumber || 
              (!filterPrice['from'] && !filterPrice['to']) ||
              (priceNumber >= fromNumber && !filterPrice['to']) ||
              (priceNumber <= toNumber && !filterPrice['from'])
              )
            ){
          return true
        }
      })
    
      setFilterProduct(filter)

  }, [productSearch, products, filterCategory, filterPrice])


  return (
    <div className='home'>
      <div className='products-filter'>
        <FilterProducts 
          setFilterCategory= {setFilterCategory}
          setFilterPrice= {setFilterPrice}
          
        />
      </div>

      <div className='products'>
        <div className='products-search'>
          <InputSearch
            setProductSearch={setProductSearch}
          />
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


    </div>
  )
}

export default HomeScreen