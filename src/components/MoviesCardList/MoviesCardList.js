import { useEffect, useState } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";
import "./MoviesCardList.css";

function MoviesCardList({ savedFilms, inProgress }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // if (loggedIn) {
      setMovies(JSON.parse(localStorage.getItem("userMovies")))
      console.log("movies = " + movies);
    // }
  }, []);

  // const movies = localStorage.getItem("beat-movies");
  // console.log({ movies });
  function handleMoreMovies() {}

  return (
    <>
    <Preloader inProgress={inProgress} />
      <div
        className={`movies-card-list__wrap  ${
          savedFilms
            ? "movies-card-list__wrap_type_saved-movies"
            : "movies-card-list__wrap_type_movies"
        }`}
      >
        {movies.map((movie) => {
          return <MoviesCard movie={movie} savedFilms={savedFilms} />;
        })}
      </div>
      <button
        className={`movies-card-list__more-button ${
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
