import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import { useForm } from 'react-hook-form'
import Category from './Category'

const FilterProducts = ({setFilterPrice, setFilterCategory}) => {

  const [categories, setCategories] = useState([])
  const { register, handleSubmit} = useForm()
  const filter = useRef()

  useEffect(() => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/products/categories'
    axios.get(URL)
      .then(res => setCategories(res.data.data.categories))
      .catch(err => console.log(err))
  },[])


  const clickFilter = () => {
    filter.current.classList.toggle('filter-open')
  }

  const changeCategory = () => {
    setFilterCategory(0)
  }

  const submit = data => {
    setFilterPrice(data)
  }

  return (
    <div className='filter__products'>
      <div onClick={clickFilter} className='filter__icon'>
        <i className='bx bx-filter-alt' >Filters</i>
      </div>

      <div ref={filter} className='filter'>
        <div className='filter-close' onClick={clickFilter}>
          <i className='bx bx-x'></i>
        </div>
      
        <div className='filter__price'>
          <h3 className='filter__price-title'>Price</h3>
          <form onSubmit={handleSubmit(submit)} className='filter__form'>
            <div className='filter__price-from'>
              <label htmlFor="from">From</label>
              <input id='from' type="text" {...register("from")} />
            </div>
            <div className='filter__price-to'>
              <label htmlFor="to">To</label>
              <input id='to' type="text" {...register("to")}/>
            </div>
            <button className='filter__price-button'>Filter price</button>
          </form>
        </div>

        <div className='filter__category'>
          <h3 className='filter__category-title'>Category</h3>
            <p onClick={changeCategory} className="category">All categories</p>
            {
              categories.map(category => (
                <Category
                  key={category.id}
                  category={category}
                  setFilterCategory = {setFilterCategory}
                />
              ))
            }
        </div>
      </div>
    </div>
  )
}

export default FilterProducts