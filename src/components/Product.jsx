import React, { useContext } from 'react'
import '../pages/shop/Shop.css'
import { ShopContext } from '../context/shop-context'
import { AiFillHeart } from 'react-icons/ai'
import { BsCartFill } from 'react-icons/bs'

const Product = ({ id, image, price, title }) => {

    const { addToCart, cartItems } = useContext(ShopContext)

    const cartItemAmount = cartItems[id]

  return (
    <div className='productCard'>
        <div className='image'>
            <img src={image} alt="" />
        </div>

        <div className="description">
            <p>
                <strong>{title}</strong>
            </p>
            <span>${price}</span>
        </div>

        <div className="iconsButton">
            <button>
                <AiFillHeart className='icon' />
            </button>
            <button onClick={() => addToCart(id)}> 
                <BsCartFill className='icon' />
                {cartItemAmount > 0 && <>({ cartItemAmount})</>}
            </button>
        </div>

    </div>
  )
}

export default Product