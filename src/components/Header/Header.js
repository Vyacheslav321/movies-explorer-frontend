import "./Header.css";
import logo from "../../images/header/header__logo.png";
import Navigation from "../Navigation/Navigation";
import Profile from "../Profile/Profile";


function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <img className="header__logo" src={logo} alt="S" />
        <Navigation />
        <Profile />
      </div>
    </header>
  );
}

export default Header;
