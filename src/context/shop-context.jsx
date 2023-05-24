import { createContext, useState } from "react"
import {  PRODUCTS } from "../products"

export const ShopContext = createContext(null)

const getDefaultCart = () => {
    let cart = {}
    for(let i = 1; i < PRODUCTS.length + 1; i++) {
        cart[i] = 0
    }
    return cart
}

export const ShopContextProvier = ({ children }) => {
    const [cartItems, setCartItems] = useState()

    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
    }

    const contextValue = {cartItems, addToCart, removeFromCart }

    console.log(cartItems)
    return (
        <ShopContext.Provider value={contextValue}>
          { children } 
        </ShopContext.Provider>
    )
}