import React from 'react'
import Product from '../../components/Product'
import { PRODUCTS } from '../../products'
import './Shop.css'

const Shop = () => {
  return (
    <div className='shop'>
      <div className="shop-title">
        <h1>Shop Page</h1>
      </div>

      <div className="shop-items">
        {
          PRODUCTS.map(product => (
            <Product data={product} key={product.id}
              image={product.productImage}
              title={product.productName}
              price={product.price}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Shop