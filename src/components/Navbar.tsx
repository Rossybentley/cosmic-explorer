import { Link } from "react-router-dom";
import "../styles/Navbar.css";
export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">APOD</Link>
      <Link to="/mars">Mars Rover</Link>
      <Link to="/favorites">Favorites</Link>
      <Link to="/search">Search</Link>
    </nav>
  );
}
