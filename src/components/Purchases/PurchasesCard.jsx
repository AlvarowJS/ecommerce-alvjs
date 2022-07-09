import React from 'react'
import ProductsPurchase from './ProductsPurchase'

const PurchasesCard = ({purchase}) => {

const monthsNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"]
const getMonthName = (date) => {
  return monthsNames[date]
}
const dateFormat = purchase.updatedAt
const year = dateFormat.slice(0,4)
const getMonth = parseInt(dateFormat.slice(5,7)) - 1
const month = getMonthName(getMonth)
const day = dateFormat.slice(8,10)

  return (
    <article className='purchase-card'>        
        <h3 className='purchase-card__title'>{month} {day}, {year}</h3>
        <div className='purchase-card__container'>
        {
            purchase.cart.products.map(product => (
                <ProductsPurchase
                    key={product.id}
                    product={product}
                />
            ))
        }
        </div>
    </article>
  )
}

export default PurchasesCard