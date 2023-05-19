function Header({ children }) {
  return (
    <header>
      <div className="logo">{children}</div>
      <form>
        <input type="search" />
      </form>
    </header>
  );
}

export default Header;
