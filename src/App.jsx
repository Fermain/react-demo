import "./App.css";
import Header from "./components/ui/Header";
import Sidebar from "./components/ui/Sidebar";
import Footer from "./components/ui/Footer";
import { Menu } from "./components/menu/Menu";
import products from "./data/products.json";

function App() {
  return (
    <>
      <Header>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRINUJpTmWA_u1GfDelJ0dg6CjH4fFAVh_RGQsPYnGo&s" alt="" />
      </Header>
      <main>
        <div>
          <Menu items={products} />
        </div>
        <Sidebar/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
