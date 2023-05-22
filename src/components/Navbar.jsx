import React from 'react'
import '../components/Navbar.css'
import logo from '../assets/logo.jpeg'
import { Link } from "react-router-dom"
import { ShoppingCart } from "phosphor-react"

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="logo">
        <img src={logo} alt="" />
      </div>

        <ul className="links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>

          <li>
            <Link to="/cart"> 
              <ShoppingCart size={32} />
            </Link>
          </li>
        </ul>

    </nav>
  )
}

export default Navbar