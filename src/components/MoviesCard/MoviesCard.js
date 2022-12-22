import "../App/App.css";
import "./MoviesCard.css";
import Pic from "../../images/movies/movies__pic-1.jpg";
import { useState } from "react";

function MoviesCard({ savedFilms }) {
  const [selectedMovie, setSelectedMovie] = useState(false);

  function handleSelectMovie() {
    setSelectedMovie(!selectedMovie);
  }
  function handleDeleteMovie() {}

  return (
    <div className="movies-card">
      <img className="movies-card__image" src={Pic} alt="card" />
      <button
        className={`movie-card__button  ${
          savedFilms ? "movie-card__button_type_delete" : "movie-card__hide"
        }`}
        onClick={handleDeleteMovie}
      ></button>
      <button
        className={`movie-card__button ${
          !savedFilms && selectedMovie
            ? "movie-card__button_type_select"
            : "movie-card__hide"
        }`}
        onClick={handleSelectMovie}
      ></button>
      <button
        className={`movie-card__button  ${
          !savedFilms && !selectedMovie
            ? "movie-card__button_type_unselect"
            : "movie-card__hide"
        }`}
        onClick={handleSelectMovie}
      >
        Сохранить
      </button>
      <div className="movies-card__wrap">
        <h3 className="movies-card__header">33 слова о дизайне</h3>
        <p className="movies-card__duration">1ч 17м</p>
      </div>
    </div>
  );
}

export default MoviesCard;
