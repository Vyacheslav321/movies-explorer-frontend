// описание запросов к api.movies-explorer
import { BASE_URL } from "./Constants";

function checkResOk(res) {
  if (res.ok) {
    return res.json();
  }

  return res.json().then((err) => {
    err.code = res.status;

    return Promise.reject(err);
  });
}

// регистрация
export const register = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password,name }),
  }).then(checkResOk);
};

// логин и получение токена
export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password}),
  }).then(checkResOk);
};

// Получение информаци о пользователе
export const getUserInfo = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then(checkResOk);
};

// Редактирование инфо о пользователе
export const setUserInfo = (email, name, token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    // credentials: "include",
    body: JSON.stringify({
      email: email,
      name: name,
    }),
  }).then(checkResOk);
};

// Получение информаци о фильмах пользователя
export const getMovies = (token) => {
  return fetch(`${BASE_URL}/movies`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    // credentials: "include",
  }).then(checkResOk);
};

//  Добавление карточки пользователя
export const createUserMovie = (
  country,
  director,
  duration,
  year,
  description,
  image,
  trailerLink,
  thumbnail,
  movieId,
  nameRU,
  nameEN,
  token
) => {
  return fetch(`${BASE_URL}/movies`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    credentials: "include",
    body: JSON.stringify({
      country: country,
      director: director,
      duration: duration,
      year: year,
      description: description,
      image: image,
      trailerLink: trailerLink,
      thumbnail: thumbnail,
      movieId: movieId,
      nameRU: nameRU,
      nameEN: nameEN,
    }),
  }).then(checkResOk);
};

// Удаление карточки пользователя
export const deleteUserMovie = (idCard, token) => {
  return fetch(`${BASE_URL}/movies/${idCard}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    credentials: "include",
  }).then(checkResOk);
};


