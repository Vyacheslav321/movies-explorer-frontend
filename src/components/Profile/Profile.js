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
      <Header loggedIn={loggedIn} />
      <h2 className="profile__header">Привет, Виталий!</h2>
      <div className="profile__wrap profile__wrap_type_page">
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
          <p className="profile__error text__normal">fffffffffffff</p>
        </form>
        <div>
        <div className="profile__wrap profile__wrap_type_footer">
          <button className="profile__button text__white" type="submit">
            Редактировать
          </button>
          <Link to="/signin" className="profile__link text__normal text__white">
            Выйти из аккаунта
          </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Profile;
