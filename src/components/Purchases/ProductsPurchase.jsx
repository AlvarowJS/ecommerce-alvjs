import React from 'react'

const ProductsPurchase = ({product}) => {

    console.log(product)

  return (
    <section className='purchase__info'>
        <h4>{product.title}</h4>
        <p>{product.productsInCart.quantity}</p>
        <div>$ {product.price}</div>
    </section>
  )
}

export default ProductsPurchase