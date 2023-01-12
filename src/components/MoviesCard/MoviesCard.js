import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
// import { useConfirmDelete } from "../../hooks/useConfirm";
import { getImage } from "../../utils/Utils";

import "../App/App.css";
import "./MoviesCard.css";

function MoviesCard({
  movie,
  handleSaveMovie,
  handleDeleteUserMovie,
}) {
  const [isUserMovie, setIsUserMovie] = useState(false);
  const [isButtonActive, setIsButtonActive] = useState(false);
  const movieCard = {
    country: movie.country || "нет данных",
    director: movie.director || "нет данных",
    duration: movie.duration || 0,
    year: movie.year || "нет данных",
    description: movie.description || "нет данных",
    image: `${
      movie?.image?.formats?.small?.path === null
        ? `https://api.nomoreparties.co${movie?.image?.formats?.small?.url}`
        : `https://api.nomoreparties.co${movie?.image?.url}`
      // : null
    }`,
    trailerLink: movie?.trailerLink,
    thumbnail: `${
      movie?.image?.formats?.thumbnail?.path === null
        ? `https://api.nomoreparties.co${movie?.image?.formats?.thumbnail?.url}`
        : `https://api.nomoreparties.co${movie?.image?.url}`
    }`,
    movieId: movie.id,
    nameRU: movie.nameRU || "нет данных",
    nameEN: movie.nameEN || "нет данных",
  };
  const modifiedDuration = `${Math.trunc(movieCard.duration / 60)}ч ${
    movieCard.duration % 60
  }м`;
  const userMovies = JSON.parse(localStorage.getItem("userMovies"));
  const userMovieCard = getUserMovieCard(userMovies, movie);
  const location = useLocation();

  function getUserMovieCard(userMovies, movie) {
    return userMovies.find((item) => {
      return (
        Number(item.movieId) === Number(movie.movieId) ||
        Number(item.movieId) === Number(movie.id)
      );
    });
  }

  function handleCardMouseOver() {
    setIsButtonActive(true);
  }

  function handleCardMouseOut() {
    setIsButtonActive(false);
  }

  function handleSelectMovie() {
    handleSaveMovie(movieCard);
    setIsUserMovie(true);
  }
// const handleDeleteMovie = useConfirmDelete('Вы уверены?', handleDeleteMovie1())
  function handleDeleteMovie() {
    handleDeleteUserMovie(userMovieCard._id);
    setIsUserMovie(false);
  }

  useEffect(() => {
    if (userMovieCard === undefined) {
      setIsUserMovie(false);
    } else {
      setIsUserMovie(true);
    }
  }, [userMovieCard, location]);

  return (
    <li
      className="movies-card"
      onMouseEnter={handleCardMouseOver}
      onMouseLeave={handleCardMouseOut}
    >
      <Link
        to={{ pathname: movieCard.trailerLink }}
        target="_blank"
        rel="noreferrer"
        className="movies-card__link"
      >
        <img
          className="movies-card__image"
          src={getImage(movie)}
          alt={movieCard.nameRU}
          title={`Описание: ${movie.description || ''} \n\nСнято: ${movie.country || ''} ${movie.year || ''}г.`}
        />
      </Link>

      {location.pathname === "/movies" && (
        <button
          className={`movie-card__button ${
            isUserMovie ? "movie-card__button_type_select" : "movie-card__hide"
          }`}
          onClick={handleDeleteMovie}
        ></button>
      )}
      {location.pathname === "/movies" && isButtonActive && (
        <button
          className={`movie-card__button  ${
            isUserMovie
              ? "movie-card__hide"
              : "movie-card__button_type_unselect"
          }`}
          onClick={handleSelectMovie}
        >
          Сохранить
        </button>
      )}
      {location.pathname === "/saved-movies" && (
        <button
          className={`movie-card__button movie-card__${
            isButtonActive ? "button_type_delete" : "hide"
          }`}
          onClick={handleDeleteMovie}
          aria-label="Удалить фильм из сохранённых"
          title="Удалить фильм из сохранённых"
        ></button>
      )}
      <div className="movies-card__wrap">
        <h3 className="movies-card__header">{movie.nameRU}</h3>
        <p className="movies-card__duration">{modifiedDuration}</p>
      </div>
    </li>
  );
}

export default MoviesCard;
