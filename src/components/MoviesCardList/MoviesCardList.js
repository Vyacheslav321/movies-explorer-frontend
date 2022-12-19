import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

function MoviesCardList({ savedFilms }) {
  function handleMoreMovies() {}

  return (
    <>
      <div
        className={`movies-card-list__wrap  ${
          savedFilms
            ? "movies-card-list__wrap_type_saved-movies"
            : "movies-card-list__wrap_type_movies"
        }`}
      >
        <MoviesCard savedFilms={savedFilms} />
        <MoviesCard savedFilms={savedFilms} />
        <MoviesCard savedFilms={savedFilms} />
        <MoviesCard savedFilms={savedFilms} />
        <MoviesCard savedFilms={savedFilms} />
        <MoviesCard savedFilms={savedFilms} />
        <MoviesCard savedFilms={savedFilms} />
        <MoviesCard savedFilms={savedFilms} />
        <MoviesCard savedFilms={savedFilms} />
        <MoviesCard savedFilms={savedFilms} />
        <MoviesCard savedFilms={savedFilms} />
        <MoviesCard savedFilms={savedFilms} />
      </div>
      <button
        className={`movies-card-list__more-button text__white  ${
          savedFilms ? "movies-card-list__hide" : ""
        }`}
        onClick={handleMoreMovies}
      >
        Ещё
      </button>
    </>
  );
}

export default MoviesCardList;
