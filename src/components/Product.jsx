import { useCart } from "./CartProvider"

export default function Product({ id, title, price }) {
    const { addToCart } = useCart()

    return (<div className="product" id={id}>
        <h2>{title}</h2>
        <b>{price}</b>
        <button onClick={addToCart}>Add to cart</button>
    </div>)
}