import Header from "../ui/Header";
import Sidebar from "../ui/Sidebar";
import Footer from "../ui/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Header>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRINUJpTmWA_u1GfDelJ0dg6CjH4fFAVh_RGQsPYnGo&s" alt="" />
      </Header>
      <main>
        <div>
          <Outlet />
        </div>
        <Sidebar/>
      </main>
      <Footer/>
    </>
  );
}