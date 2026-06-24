import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home">
        <h1 className="logo">FASHION FACTORY</h1>
      </a>
      <div className="nav-links">
        
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>

      </div>
    </nav>
  );
}
