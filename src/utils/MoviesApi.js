// описание запросов к api.beat-movies
import { SOURCE_URL } from "./Constants";

class Api {
  constructor({ SOURCE_URL, headers }) {
    this._SOURCE_URL = SOURCE_URL;
    this._headers = headers;
  }

  _checkResOk(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  // Получение информаци о карточках и пользователе
  getMovies() {
    return fetch(`${this._SOURCE_URL}`, {
      method: "GET",
      headers: this._headers,
      // credentials: 'include',
    }).then(this._checkResOk);
  }
}

const moviesApi = new Api({
  SOURCE_URL, 
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  }
});

export default moviesApi;