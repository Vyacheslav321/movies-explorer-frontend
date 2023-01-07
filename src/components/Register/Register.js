import { Link } from "react-router-dom";
import { useFormWithValidation } from "../../hooks/useFormValidation";

import "../App/App.css";
import "../Login/Login.css";
import Preloader from "../Preloader/Preloader";
import "./Register.css";

function Register({onRegister, inProgress, errorMessage, clearErrorMessages}) {
  const { values, handleChange, error, isValid } =
  useFormWithValidation();

  function handleRegister(e) {
    e.preventDefault();
    onRegister(values.name, values.email, values.password);
    clearErrorMessages();
  }

  return (
    <section className="register login">
      <Preloader inProgress={inProgress} />
      <div className="login__header">
        <Link to="/" className="logo" />
        <h2 className="login__welcome">Добро пожаловать!</h2>
      </div>
      <form className="login__form" onSubmit={handleRegister} autoComplete="off">
        <p className="login__label">Имя</p>
        <input
          className="login__input"
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          disabled={inProgress}
          onChange={handleChange}
          value={values.name || ''}
        ></input>
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
          value={values.email || ''}
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
          value={values.password || ''}
        ></input>
        {/* <div className="login__line login__line_place_last"></div> */}
        <p className="register__error">{error.name || error.email || error.password || errorMessage}</p>
        <div className="login__button-container">
          <button className={`login__button ${isValid ? '' : 'login__button_disabled'}`} type="submit" disabled={!isValid}>
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
