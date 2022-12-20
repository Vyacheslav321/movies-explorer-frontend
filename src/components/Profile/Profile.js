// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import "../App/App.css";
import "./Profile.css";
import { useState } from "react";

function Profile({ loggedIn, handleSignOut }) {
  const [editProfile, setEditProfile] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    setEditProfile(!editProfile);
  }

  function handleEditProfile() {
    setEditProfile(!editProfile);
  }

  return (
    <nav className={`profile ${loggedIn ? "" : "profile__hide"}`}>
      <Header loggedIn={loggedIn} main={false} />
      <h2 className="profile__header">Привет, Виталий!</h2>
      <div className="profile__wrap">
        <form className="profile__form" onSubmit={handleSubmit}>
          <div className="profile__container">
            <p className="profile__label">Имя</p>
            <input
              className={`profile__input ${
                editProfile ? "profile__active" : ""
              }`}
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Виталий"
              required
              disabled={!editProfile}
              // value={name}
            ></input>
          </div>
          <div className="profile__line"></div>
          <div className="profile__container">
            <p className="profile__label">E-mail</p>
            <input
              className="profile__input"
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="pochta@yandex.ru"
              required
              disabled={!editProfile}
              // value={email}
            ></input>
          </div>
          <p className={`profile__error ${editProfile ? "" : "profile__hide"}`}>
            описание ошибки
          </p>
          <button
            className={`profile__button ${editProfile ? "" : "profile__hide"}`}
            type="submit"
          >
            Сохранить
          </button>
        </form>
        <div className="profile__footer">
          <div
            className={`profile__edit ${editProfile ? "profile__hide" : ""}`}
            onClick={handleEditProfile}
          >
            Редактировать
          </div>
          <Link
            to="/"
            className={`profile__exit ${editProfile ? "profile__hide" : ""}`}
            onClick={handleSignOut}
          >
            Выйти из аккаунта
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Profile;
