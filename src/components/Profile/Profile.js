// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import "../App/App.css";
import "./Profile.css";

function Profile({ loggedIn, inProgress }) {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <nav className={`profile ${loggedIn ? "" : "profile__hide"}`}>
      <Header />
      <h2 className="profile__header">Привет, Виталий!</h2>
      <div className="profile__wrap">
        <form className="profile__form" onSubmit={handleSubmit}>
          <div className="profile__container">
            <p className="profile__label text__white">Имя</p>
            <input
              className="profile__input text__normal text__white"
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Виталий"
              required
              disabled={inProgress}
              // value={email}
            ></input>
          </div>
          <div className="profile__line"></div>
          <div className="profile__container">
            <p className="profile__label text__white">E-mail</p>
            <input
              className="profile__input text__normal text__white"
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="pochta@yandex.ru"
              required
              disabled={inProgress}
              // value={email}
            ></input>
          </div>
          <p className="profile__error text__normal"></p>
        </form>
        <div>
          <div className="register__button-container">
            <button className="login__button" type="submit">
              Зарегистрироваться
            </button>
          </div>
          <p className="login__footer text__normal text__gray">
            Уже зарегистрированы?
            <Link to="/signin" className="login__link text__normal">
              Войти
            </Link>
          </p>
        </div>
      </div>
    </nav>
  );
}

export default Profile;
