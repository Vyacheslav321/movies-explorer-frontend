import "./Header.css";
import Navigation from "../Navigation/Navigation";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <h1>dfgfdgdfgfdgdfgfdgfd</h1>
        <img
          className="header__logo"
          src="../../images/header__logo.jpg"
          alt=""
        />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
