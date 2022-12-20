import NavTab from "../NavTab/NavTab";
import "../App/App.css";
import "./Navigation.css";
import React from "react";
import { Link } from "react-router-dom";

function Navigation({ loggedIn, onClose, main }) {
  const [isMenuHide, setIsMenuHide] = React.useState(true);

  function handleOpenMenu() {
    setIsMenuHide(false);
  }

  function handleCloseMenu() {
    setIsMenuHide(true);
  }

  return (
    <nav className="navigation">
      <div
        className={`navigation__wrap ${
          loggedIn ? "" : "navigation__wrap_position_right"
        }`}
      >
        <div
          className={`navigation__container ${
            loggedIn ? "" : "navigation__hide"
          }`}
        >
          <Link
            to="/movies"
            className="navigation__text navigation__text_type_movies"
          >
            Фильмы
          </Link>
          <Link
            to="/saved-movies"
            className="navigation__text navigation__text_type_saved-movies"
          >
            Сохранённые фильмы
          </Link>
        </div>
        <div className="navigation__container">
          <Link
            to="/signup"
            className={`navigation__text navigation__text_type_signup ${
              loggedIn ? "navigation__hide" : ""
            }`}
          >
            Регистрация
          </Link>
          {loggedIn ? (
            <Link
              to="/profile"
              className="navigation__text navigation__text_type_account"
            >
              <div
                className={`navigation__account ${
                  main ? "navigation__account_type_main" : ""
                }`}
              >
                <h3 className="navigation__account-text">Аккаунт</h3>
                <div className="navigation__account-round">
                  <div className="navigation__account-img"></div>
                </div>
              </div>
            </Link>
          ) : (
            <Link
              to="/signin"
              className="navigation__text navigation__text_type_signin"
            >
              Войти
            </Link>
          )}
        </div>
        <button
          onClick={handleOpenMenu}
          className={`navigation__burger  ${
            loggedIn ? "" : "navigation__hide"
          }`}
        ></button>
        <NavTab isMenuHide={isMenuHide} onCloseMenu={handleCloseMenu}></NavTab>
      </div>
    </nav>
  );
}

export default Navigation;
