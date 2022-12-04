import "./Navigation.css";
import "../App/App.css";
import React from "react";
import { Link } from "react-router-dom";

function Navigation(props) {
  
  return (
    <nav className="navigation">
      <div className={props.loggedIn ? "" : "no-display"}>
        <Link to="/movies" className="navigation__menu navigation__text">
          Фильмы
        </Link>
        <Link
          to="/saved-movies"
          className="navigation__menu navigation__menu_type_login navigation__text"
        >
          Сохранённые фильмы
        </Link>
      </div>
    </nav>
  );
}

export default Navigation;
