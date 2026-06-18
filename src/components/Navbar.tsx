import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import { motion } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Link to="/" className="logo">
        🚀 Cosmic Explorer
      </Link>

      <button
        className="hamburger"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <NavLink to="/" onClick={() => setIsOpen(false)}>
          Home
        </NavLink>
        <NavLink to="/mars" onClick={() => setIsOpen(false)}>
          Mars
        </NavLink>
        <NavLink to="/favorites" onClick={() => setIsOpen(false)}>
          Favorites
        </NavLink>
        <NavLink to="/asteroids" onClick={() => setIsOpen(false)}>
          Asteroids
        </NavLink>
        <NavLink to="/search" onClick={() => setIsOpen(false)}>
          Search
        </NavLink>
      </div>
    </motion.nav>
  );
}

export default Navbar;
