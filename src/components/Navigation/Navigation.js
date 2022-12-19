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
    <nav
      className={`navigation__wrap ${
        loggedIn ? "" : "navigation__wrap_position_right"
      }`}
    >
      <div className={`navigation__menu ${loggedIn ? "" : "navigation__hide"}`}>
        <Link
          to="/movies"
          className="navigation__text navigation__text_type_movies text__normal text__white"
        >
          Фильмы
        </Link>
        <Link
          to="/saved-movies"
          className="navigation__text navigation__text_type_saved-movies text__normal text__white"
        >
          Сохранённые фильмы
        </Link>
      </div>
      <div className="navigation__menu">
        <Link
          to="/signup"
          className={`navigation__text navigation__text_type_signup text__normal text__white ${
            loggedIn ? "navigation__hide" : ""
          }`}
        >
          Регистрация
        </Link>
        {loggedIn ? (
          <Link
            to="/profile"
            className="navigation__text navigation__text_type_account text__normal text__white"
          >
            <div
              className={`navigation__account ${
                main ? "navigation__account_type_main" : ""
              }`}
            >
              <h3 className="navigation__account-text text__normal text__white">
                Аккаунт
              </h3>
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
        className={`navigation__burger  ${loggedIn ? "" : "navigation__hide"}`}
      ></button>
      <NavTab isMenuHide={isMenuHide} onCloseMenu={handleCloseMenu}></NavTab>
    </nav>
  );
}

export default Navigation;