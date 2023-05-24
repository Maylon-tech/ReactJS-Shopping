import React, { useContext } from 'react'
import '../pages/shop/Shop.css'
import { ShopContext } from '../context/shop-context'
import { AiFillHeart } from 'react-icons/ai'
import { BsCartFill } from 'react-icons/bs'

const Product = ({ image, price, title }) => {

    const { addToCart, cartItem } = useContext(ShopContext)

    const cartItemAmount = cartItem()

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
            <button onClick={() => addToCart()}> 
                <BsCartFill className='icon' />
                {cartItemAmount > 0 && <>({ cartItemAmount})</>}
            </button>
        </div>
    </div>
  )
}

export default Product