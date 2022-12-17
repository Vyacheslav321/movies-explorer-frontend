import "./Header.css";
import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom";

function Header({ loggedIn, onClose, main }) {
  return (
    <header
      className={`header ${
        main ? "header_color_landing" : "header_color_movies"
      }`}
    >
      <div className="header__container">
        <Link to="/" className="header__logo" />
        <Navigation loggedIn={loggedIn} onClose={onClose} />
      </div>
    </header>
  );
}

export default Header;
