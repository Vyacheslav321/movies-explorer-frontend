import "./Header.css";
import Navigation from "../Navigation/Navigation";

function Header({ loggedIn, main }) {
  return (
    <header
      className={`header ${
        main ? "header_color_landing" : "header_color_movies"
      }`}
    >
      <Navigation loggedIn={loggedIn} main={main} />
    </header>
  );
}

export default Header;
