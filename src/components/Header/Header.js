import "./Header.css";
import Navigation from "../Navigation/Navigation";

function Header({ loggedIn, onClose }) {
  return (
    <header
      className={`header ${
        loggedIn ? "header_color_movies" : "header_color_landing"
      }`}
    >
      <div className="header__container">
        <div className="header__logo"></div>
        <Navigation loggedIn={loggedIn} onClose={onClose} />
      </div>
    </header>
  );
}

export default Header;
