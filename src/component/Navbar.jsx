import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">
          <span className="logo-icon">☕</span>
          <span className="logo-text">Brew Haven</span>
        </Link>

        <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>

        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


