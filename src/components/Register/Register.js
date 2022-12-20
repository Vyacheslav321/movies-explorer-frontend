import { Link } from "react-router-dom";

import "../App/App.css";
import "../Login/Login.css";
import "./Register.css";

function Register(props) {
  function handleRegister(e) {
    e.preventDefault();
    props.onRegister();
  }
  return (
    <section className="register login">
      <div className="login__header">
        <Link to="/" className="header__logo" />
        <h2 className="login__welcome">Добро пожаловать!</h2>
      </div>
      <form className="login__form" onSubmit={handleRegister}>
        <p className="login__label">Имя</p>
        <input
          className="login__input"
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Виталий"
          required
          disabled={props.inProgress}
          // value={name}
        ></input>
        <div className="login__line"></div>
        <p className="login__label">E-mail</p>
        <input
          className="login__input"
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder=""
          required
          disabled={props.inProgress}
          // value={email}
        ></input>
        <div className="login__line"></div>
        <p className="login__label">Пароль</p>
        <input
          className="login__input"
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          placeholder=""
          required
          disabled={props.inProgress}
          // value={password}
        ></input>
        <div className="login__line login__line_place_last"></div>
        <p className="register__error">Что-то пошло не так...</p>
        <div className="login__button-container">
          <button className="login__button" type="submit">
            Зарегистрироваться
          </button>
        </div>
      </form>
      <p className="login__footer">
        Уже зарегистрированы?
        <Link to="/signin" className="login__link">
          Войти
        </Link>
      </p>
    </section>
  );
}

export default Register;
