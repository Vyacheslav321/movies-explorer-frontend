import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../../context/currentUserContext";
import { useFormWithValidation } from "../../hooks/useFormValidation";

import Header from "../Header/Header";
import "../App/App.css";
import "./Profile.css";

function Profile({
  loggedIn,
  onEdit,
  isUpdateProfile,
  handleSignOut,
  errorMessage,
  clearErrorMessages,
  inProgress,
}) {
  const [editProfile, setEditProfile] = useState(false);
  const [currentUserError, setCurrentUserError] = useState("");
  const [additionalVerification, setAdditionalVerification] = useState(false);
  const { values, setValues, handleChange, error, isValid } =
    useFormWithValidation();
  const currentUser = useContext(CurrentUserContext);

  function handleSubmit(e) {
    e.preventDefault();
    setEditProfile(false);
    onEdit(values.name, values.email);
    clearErrorMessages();
  }

  useEffect(() => {
    if (
      !isValid ||
      currentUser.name === values.name ||
      currentUser.email === values.email
    ) {
      setAdditionalVerification(true);
      setCurrentUserError("Введите новые данные пользователя");
    } else {
      setAdditionalVerification(false);
      setCurrentUserError("");
    }
  }, [isValid, currentUser.name, currentUser.email, values.name, values.email]);

  useEffect(() => {
    setValues(currentUser);
  }, [currentUser, setValues]);

  useEffect(() => {
    setEditProfile(!isUpdateProfile);
  }, [isUpdateProfile, onEdit]);

  useEffect(() => {
    if (inProgress) {
      setEditProfile(false);
    }
  }, [inProgress]);

  function onCloseEdit() {
    setEditProfile(false);
    setValues(currentUser);
  }

  function handleEditProfile() {
    setEditProfile(true);
  }

  return (
    <div className="profile">
      <Header loggedIn={loggedIn} main={false} />
      <main className="profile__main">
        <h2 className="profile__header">Привет, {currentUser.name}!</h2>
        <div className="profile__wrap">
          <form className="profile__form" onSubmit={handleSubmit}>
            <div className="profile__container">
              <p className="profile__label">Имя</p>
              <input
                className={`profile__input ${
                  editProfile ? "profile__active" : ""
                }`}
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                pattern="[а-яА-Яa-zA-ZёË\- ]{1,}"
                disabled={!editProfile}
                onChange={handleChange}
                value={values.name || ""}
                required
              ></input>
            </div>
            <div className="profile__line"></div>
            <div className="profile__container">
              <p className="profile__label">E-mail</p>
              <input
                className="profile__input"
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                disabled={!editProfile}
                onChange={handleChange}
                value={values.email || ""}
                required
              ></input>
            </div>
            <p
              className={`profile__error ${editProfile ? "" : "profile__hide"}`}
            >
              {error.name || error.email || errorMessage || currentUserError}
            </p>
            {editProfile ? (
              <button
                className={`profile__button ${
                  additionalVerification ? "profile__button_disabled" : ""
                }`}
                type="submit"
                disabled={additionalVerification}
              >
                Сохранить
              </button>
            ) : (
              ""
            )}
            {editProfile ? (
              <p className="profile__close-edit" onClick={onCloseEdit}>
                отмена
              </p>
            ) : (
              ""
            )}
          </form>
          <div className="profile__footer">
            <div
              className={`profile__edit ${editProfile ? "profile__hide" : ""}`}
              onClick={handleEditProfile}
            >
              Редактировать
            </div>
            <Link
              to="/"
              className={`profile__exit ${editProfile ? "profile__hide" : ""}`}
              onClick={handleSignOut}
            >
              Выйти из аккаунта
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Profile;
