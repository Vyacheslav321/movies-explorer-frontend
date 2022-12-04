import { Link } from "react-router-dom";
import "./Profile.css";

function Profile() {
  return (
    <nav className="profile">
      <Link to="/signup" className="profile__menu profile__text">
        Регистрация
      </Link>
      <Link
        to="/signin"
        className="profile__menu profile__menu_type_login profile__text"
      >
        Войти
      </Link>
    </nav>
  );
}

export default Profile;
