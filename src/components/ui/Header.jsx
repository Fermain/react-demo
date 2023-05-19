import { Link } from "react-router-dom";

function Header({ children }) {
  return (
    <header>
      <div className="logo">{children}</div>
      <Link to="/">Home</Link>
      <Link to="/menu">Menu</Link>
      <form>
        <input type="search" />
      </form>
    </header>
  );
}

export default Header;
