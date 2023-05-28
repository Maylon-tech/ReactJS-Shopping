import React, { useContext } from 'react'
import { PRODUCTS } from '../../products'
import { ShopContext } from '../../context/shop-context'
import CartItem from '../cart/Cart-Item'
import './cart.css'

const Cart = () => {
  const { cartItems } = useContext(ShopContext)

  return (
    <div className='cart'>
      <div>
        <h1>Your Cart Items</h1>
      </div>

      <div className="cartems">
        {
          PRODUCTS.map((product) => {
            if(cartItems[PRODUCTS.id] !== 0) {
              return <CartItem data={product} />
            }
          })
        }
      </div>

      <div className="checkout">
        <p> Subtotal: $</p>
        <button> Continue Shopping</button>
        <button> Checkout </button>
      </div>
    </div>
  )
}

export default Cart