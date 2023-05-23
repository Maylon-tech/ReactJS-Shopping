import { createContext, useState } from "react"

export const ShopContext = createContext(null)

const getDefaultCart = () => {
    let cart = {}
    
}

export const ShopContextProvier = ({ children }) => {
    const [cartItems, setCartItems] = useState()


    return (
        <ShopContext.Provider>{ children } </ShopContext.Provider>
    )
}