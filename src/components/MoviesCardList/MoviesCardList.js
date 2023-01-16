import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import useScreenWith from "../../hooks/useScreenWidth";
import { getUserMovieCard } from "../../utils/Utils";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

function MoviesCardList({
  isSavedFilms,
  movies,
  isUpdated,
  isSearchError,
  handleSaveMovie,
  handleDeleteUserMovie,
}) {
  const windowSize = useScreenWith();
  const [moviesShow, setMoviesShow] = useState([]);
  const [inicialCardsNumber, setInicialCardsNumber] = useState({
    all: 12,
    add: 3,
  });

  const [userMovies, setUserMovies] = useState(
    JSON.parse(localStorage.getItem("userMovies"))
  );

  const location = useLocation();

  // количество карточек в зависимости от ширины экране
  useEffect(() => {
    if (location.pathname === "/movies") {
      if (windowSize > 1280) {
        setInicialCardsNumber({ all: 12, add: 3 });
      } else if (windowSize > 768 && windowSize <= 1280) {
        setInicialCardsNumber({ all: 8, add: 2 });
      } else {
        setInicialCardsNumber({ all: 5, add: 2 });
      }
    }
  }, [windowSize, location.pathname]);

  // отображаемый массив фильмов
  useEffect(() => {
    if (movies.length) {
      const cards = movies.filter((item, i) => i < inicialCardsNumber.all);
      setMoviesShow(cards);
    }
  }, [movies, inicialCardsNumber.all]);

  function handleMoreMovies() {
    const start = moviesShow.length;
    const more = movies.length - start;
    const end = start + inicialCardsNumber.add;
    if (more > 0) {
      const addCards = movies.slice(start, end);
      setMoviesShow([...moviesShow, ...addCards]);
    }
  }

  useEffect(() => {
    setUserMovies(JSON.parse(localStorage.getItem("userMovies")));
  }, [isUpdated, isSearchError]);

  return (
    <>
      <span
        className={`movies__error ${
          isSearchError ? "" : "movies-card-list__hide"
        }`}
      >{`Cервер недоступен. \nПодождите немного и попробуйте ещё раз`}
      </span>
      <ul
        className={`movies-card-list__wrap  ${
          isSavedFilms
            ? "movies-card-list__wrap_type_saved-movies"
            : "movies-card-list__wrap_type_movies"
        }`}
      >
        {moviesShow.map((movie) => {
          return (
            <MoviesCard
              key={movie.id || movie.movieId}
              movie={movie}
              isUserFilm={getUserMovieCard(userMovies, movie)}
              handleSaveMovie={handleSaveMovie}
              handleDeleteUserMovie={handleDeleteUserMovie}
            />
          );
        })}
      </ul>
      {location.pathname === "/movies" &&
        moviesShow.length < movies.length &&
        moviesShow.length >= 5 && (
          <button
            className={"movies-card-list__more-button"}
            onClick={handleMoreMovies}
          >
            Ещё
          </button>
        )}
    </>
  );
}

export default MoviesCardList;
