import { Link } from "react-router-dom";
import "./Register.css";
import "../App/App.css";
import "../Login/Login.css";

function Register(props) {
  function handleRegister(e) {
    e.preventDefault();
    props.onRegister();
  }
  return (
    <section className="login">
      <div className="login__header">
        <h2 className="login__welcome">Добро пожаловать!</h2>
      </div>
      <form className="login__form" onSubmit={handleRegister}>
        <p className="login__label text__normal text__gray">Имя</p>
        <input
          className="login__input text__white"
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
        <p className="login__label text__normal text__gray">E-mail</p>
        <input
          className="login__input text__white"
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
        <p className="login__label text__normal text__gray">Пароль</p>
        <input
          className="login__input text__white"
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          placeholder=""
          required
          disabled={props.inProgress}
          // value={password}
        ></input>
        <div className="login__line"></div>
        <p className="login__error login__error_place_last text__normal"></p>
        <div className="register__button-container">
          <button className="login__button" type="submit">
            Зарегистрироваться
          </button>
        </div>
      </form>
      <p className="login__footer text__normal text__gray">
        Уже зарегистрированы?
        <Link to="/signin" className="login__link text__normal">
          Войти
        </Link>
      </p>
    </section>
  );
}

export default Register;
