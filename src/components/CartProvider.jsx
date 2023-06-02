import { createContext, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
    const key = "cart";

    const [cart, setCart] = useState(JSON.parse(localStorage[key]) || [])

    function addToCart(product) {
        // Should check if there is an existing product first
        // And increment quantity instead
        setCart([...cart, product])
        localStorage[key] = JSON.stringify(cart)
    }

    function removeFromCart(product) {
        setCart(cart.filter(item => item.id === product.id))
        localStorage[key] = JSON.stringify(cart)
    }

    function clearCart() {
        localStorage.removeItem(key)
        setCart([])
    }

    const total = cart.map(p => p.price).reduce((total, current) => total += current, 0)

    return (<CartContext.Provider value={{
        addToCart,
        removeFromCart,
        clearCart,
        total,
        cart
    }}>{children}</CartContext.Provider>)
}