import "./Navigation.css";

function Navigation() {
  return (
    <nav className="navigation">
      <a href="#" className="navigation__menu navigation__text">
        Регистрация
      </a>
      <a
        href=""
        className="navigation__menu navigation__menu_type_login navigation__text"
      >
        Войти
      </a>
    </nav>
  );
}

export default Navigation;
