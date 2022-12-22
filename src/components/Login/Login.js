import { Link } from "react-router-dom";

import "./Login.css";
import "../App/App.css";
import "../Navigation/Navigation.css";

function Login(props) {
  function handleLogin(e) {
    e.preventDefault();
    props.onLogin();
  }

  return (
    <section className="login">
      <div className="login__header">
        <Link to="/" className="logo" />
        <h2 className="login__welcome">Рады видеть!</h2>
        <form className="login__form" onSubmit={handleLogin}>
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
          <div className="login__line"></div>
          <p className="login__error login__error_place_last">
            Что-то пошло не так...
          </p>
          <div className="login__button-container">
            <button className="login__button" type="submit">
              Войти
            </button>
          </div>
        </form>
      </div>
      <p className="login__footer">
        Ещё не зарегистрированы?
        <Link to="/signup" className="login__link">
          Регистрация
        </Link>
      </p>
    </section>
  );
}

export default Login;
