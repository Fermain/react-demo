import { Menu } from "../components/menu/Menu";
import products from "../data/products.json";

export default function MenuPage() {
  return (
    <Menu items={products}/>
  )
}