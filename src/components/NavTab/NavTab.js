import { Link } from "react-router-dom";

import "./NavTab.css";
import "../Navigation/Navigation.css";

function NavTab({ isMenuHide, onCloseMenu }) {
  const handleOverlayClick = (evt) => {
    if (evt.target === evt.currentTarget) {
      onCloseMenu();
    }
  };

  return (
    <section
      className={`nav-tab ${isMenuHide ? "" : "visible"}`}
      onClick={handleOverlayClick}
    >
      <button
        className="nav-tab__burger-close-button"
        onClick={onCloseMenu}
      ></button>
      <div
        className={`nav-tab__burger-container ${
          isMenuHide ? "nav-tab__hide" : ""
        }`}
      >
        <div className="nav-tab__burger-links">
          <Link
            to="/"
            className="nav-tab__burger-link"
          >
            Главная
          </Link>
          <Link
            to="/movies"
            className="nav-tab__burger-link"
          >
            Фильмы
          </Link>
          <Link
            to="/saved-movies"
            className="nav-tab__burger-link"
          >
            Сохранённые фильмы
          </Link>
        </div>
        <Link to="/profile" className="nav-tab__burger-profile">
          <div className="navigation__account">
            <h3 className="navigation__account-text">
              Аккаунт
            </h3>
            <div className="navigation__account-round">
              <div className="navigation__account-img"></div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}

export default NavTab;
