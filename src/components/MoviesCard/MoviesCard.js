import "../App/App.css";
import "./MoviesCard.css";
import { useState } from "react";
import { createUserMovie, deleteUserMovie } from "../../utils/MainApi";

function MoviesCard({ savedFilms, movie }) {
  const [selectedMovie, setSelectedMovie] = useState(false);
  const token = localStorage.getItem("jwt");
  
  function handleSelectMovie() {
    createUserMovie(
      movie.country,
      movie.director,
      movie.duration,
      movie.year,
      movie.description,
      movie.image.url,
      // https://api.nomoreparties.co  +  /uploads/small_all_tommoros_parties_33a125248d.jpeg
      movie.trailerLink,
      movie.thumbnail,
      movie.movieId,
      movie.nameRU,
      movie.nameEN,
      token
    )
    setSelectedMovie(!selectedMovie);
  }
  function handleDeleteMovie() {
    deleteUserMovie(movie.id, token);
  }

  return (
    <div className="movies-card">
      <img className="movies-card__image" src={movie.image} alt={movie.nameRU || movie.nameEN} />
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
        <h3 className="movies-card__header">{movie.nameRU || movie.nameEN}</h3>
        <p className="movies-card__duration">{movie.duration}</p>
      </div>
    </div>
  );
}

export default MoviesCard;
