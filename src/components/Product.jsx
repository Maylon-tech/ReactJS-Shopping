import React from 'react'
import '../pages/shop/Shop.css'

import { AiFillHeart } from 'react-icons/ai'
import { BsCartFill } from 'react-icons/bs'

const Product = ({ image, price, title }) => {
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
            <button>
                <BsCartFill className='icon' />
            </button>
        </div>
    </div>
  )
}

export default Product