import { useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { useFormWithValidation } from "../../hooks/useFormValidation";

import "./Login.css";
import "../App/App.css";
import "../Navigation/Navigation.css";
import Preloader from "../Preloader/Preloader";


function Login({ onLogin, inProgress, errorMessage, clearErrorMessages }) {
  const { values, handleChange, error, isValid, resetForm } = useFormWithValidation();

  function handleLogin(e) {
    e.preventDefault();
    onLogin(values.email, values.password);
    clearErrorMessages();
  }

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  return (
    <>
      <Preloader inProgress={inProgress} />
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
              required
              disabled={inProgress}
              onChange={handleChange}
              value={values.email || ""}
            ></input>
            <p className="login__label">Пароль</p>
            <input
              className="login__input"
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              disabled={inProgress}
              onChange={handleChange}
              value={values.password || ""}
            ></input>
            <p className="login__error login__error_place_last">
              {error.email || error.password || errorMessage}
            </p>
            <div className="login__button-container">
              <button
                className={`login__button ${
                  isValid ? "" : "login__button_disabled"
                }`}
                type="submit"
                disabled={!isValid}
              >
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
    </>
  );
}

export default withRouter(Login);
