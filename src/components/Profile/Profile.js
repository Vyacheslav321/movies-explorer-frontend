import './Profile.css';

function Profile() {
    return (
      <nav className="profile">
        <a href="#" className="profile__menu profile__text">
          Регистрация
        </a>
        <a
          href="#"
          className="profile__menu profile__menu_type_login profile__text"
        >
          Войти
        </a>
      </nav>
    );
}

export default Profile;
