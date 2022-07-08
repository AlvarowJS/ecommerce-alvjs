import React from 'react'

const ProductsPurchase = ({product}) => {

    console.log(product)

  return (
    <section>
        <h4>{product.title}</h4>
        <p>{product.productsInCart.quantity}</p>
        <div>$ {product.price}</div>
    </section>
  )
}

export default ProductsPurchase