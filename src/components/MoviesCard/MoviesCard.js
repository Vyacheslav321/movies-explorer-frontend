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
      <div
        className={`movie-card__button  ${
          savedFilms ? "movie-card__button_type_delete" : "movie-card__hide"
        }`}
        onClick={handleDeleteMovie}
      ></div>
      <div
        className={`movie-card__button ${
          !savedFilms && selectedMovie
            ? "movie-card__button_type_select"
            : "movie-card__hide"
        }`}
        onClick={handleSelectMovie}
      ></div>
      <div
        className={`movie-card__button  ${
          !savedFilms && !selectedMovie
            ? "movie-card__button_type_unselect text-normal text-white"
            : "movie-card__hide"
        }`}
        onClick={handleSelectMovie}
      >
        Сохранить
      </div>
      <div className="movies-card__wrap">
        <h3 className="movies-card__header text-white">33 слова о дизайне</h3>
        <p className="movies-card__duration text-normal text-gray">1ч 17м</p>
      </div>
    </div>
  );
}

export default MoviesCard;
