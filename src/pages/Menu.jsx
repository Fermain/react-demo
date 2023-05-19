import { Helmet } from "react-helmet";
import { Menu } from "../components/menu/Menu";
import products from "../data/products.json";

export default function MenuPage() {
  return (
    <>
      <Helmet>
        <title>what's cooking??</title>
      </Helmet>
      <Menu items={products} />
    </>
  );
}
