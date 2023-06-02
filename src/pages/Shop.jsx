import { useEffect, useState, useContext } from "react";
import Product from "../components/Product";
import { CartContext } from "../components/CartProvider";

export default function Shop() {
    const { cart } = useContext(CartContext)

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/")
            .then(res => res.json())
            .then(products => setProducts(products))
    }, [])

    return (
        <>
            <div className="cart">
                {cart.length} items in the cart
            </div>
            <h1>SHOP PAGE</h1>
            {products && products.map(product => (<Product key={product.id} {...product} />))}
        </>
    );
}
