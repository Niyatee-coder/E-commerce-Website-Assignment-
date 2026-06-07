export function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home">
        <h1 className="logo">FASHION FACTORY</h1>
      </a>
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#shop">Shop</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;