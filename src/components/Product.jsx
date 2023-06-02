import { CartContext } from "./CartProvider"
import { useContext } from "react"

export default function Product({ id, title, price }) {
    const { addToCart } = useContext(CartContext)

    return (<div className="product" id={id}>
        <h2>{title}</h2>
        <b>{price}</b>
        <button onClick={addToCart}>Add to cart</button>
    </div>)
}