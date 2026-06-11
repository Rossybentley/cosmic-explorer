import { Link, NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import { motion } from "framer-motion";

function Navbar() {
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

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/mars">Mars</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
        <NavLink to="/asteroids">Asteroids</NavLink>
        <NavLink to="/search">Search</NavLink>
      </div>
    </motion.nav>
  );
}

export default Navbar;
