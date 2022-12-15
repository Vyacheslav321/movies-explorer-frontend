import "./Header.css";
import Navigation from "../Navigation/Navigation";

function Header({ loggedIn, onClose, main }) {
  return (
    <header
      className={`header ${
        main ? "header_color_landing" : "header_color_movies"
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
