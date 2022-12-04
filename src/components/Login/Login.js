import { Link } from "react-router-dom";
import "./Login.css";
import "../App/App.css";

function Login(props) {
  function handleLogin(e) {
    e.preventDefault();
    props.onLogin();
  }

  return (
    <section className="login">
      <div className="login__header">
        <h2 className="login__welcome">Рады видеть!</h2>
      </div>
      <form className="login__form" onSubmit={handleLogin}>
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
        <div className="login__button-container">
          <button className="login__button" type="submit">
            Войти
          </button>
        </div>
      </form>
      <p className="login__footer text__normal text__gray">
        Ещё не зарегистрированы?
        <Link to="/signup" className="login__link text__normal">
          Регистрация
        </Link>
      </p>
    </section>
  );
}

export default Login;
