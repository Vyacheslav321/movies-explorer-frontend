import { Link } from "react-router-dom";
import "./NavTab.css";

function NavTab({ isMenuHide, onCloseMenu }) {
  const handleOverlayClick = (evt) => {
    if (evt.target === evt.currentTarget) {
      onCloseMenu();
    }
  };

  return (
    <section
      className={`nav-tab__burger-menu ${isMenuHide ? "nav-tab__hide" : ""}`}
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
            className="nav-tab__burger-link text__normal text__white"
          >
            Главная
          </Link>
          <Link
            to="/movies"
            className="nav-tab__burger-link text__normal text__white"
          >
            Фильмы
          </Link>
          <Link
            to="/saved-movies"
            className="nav-tab__burger-link text__normal text__white"
          >
            Сохранённые фильмы
          </Link>
        </div>
        <Link
          to="/profile"
          className="nav-tab__burger-link nav-tab__burger-link_type_profile"
        >
          Аккаунт
        </Link>
      </div>
    </section>
  );
}

export default NavTab;
