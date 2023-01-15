import { useEffect, useState } from "react";
import moviesApi from "../../utils/MoviesApi";

import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import "./Movies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { filterMovies } from "../../utils/Utils";

function Movies({
  loggedIn,
  isUpdated,
  handleTooltip,
  handlePreloader,
  handleSaveMovie,
  handleDeleteUserMovie,
}) {
  const [allMovies, setAllMovies] = useState([]);
  const [isShortMoviesChecked, setIsShortMoviesChecked] = useState(false);
  const [isNotFoundResult, setIsNotFoundResult] = useState(true);
  const [foundMovies, setFoundMovies] = useState([]);

  const [isSearchError, setIsSearchError] = useState(false);

  function handleSearchMovies() {
    const searchKeyword = localStorage.getItem("searchKeyword");
    handlePreloader(true);
    setIsNotFoundResult(false);
    setIsSearchError(false);
    if (allMovies.length === 0) {
      moviesApi
        .getMovies()
        .then((movies) => {
          setAllMovies(movies);
          const searchResult = filterMovies(
            movies,
            searchKeyword,
            isShortMoviesChecked
          );
          if (searchResult.length === 0) {
            setIsNotFoundResult(true);
            setIsSearchError(true);
          } else {
            localStorage.setItem("foundMovies", JSON.stringify(searchResult));
            setFoundMovies(searchResult);
          }
        })
        .catch((err) => {
          handleTooltip({
            isPopupOpen: true,
            message: `{${err.message} Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз}`,
            successful: false,
          });
          setIsSearchError(true);
        })
        .finally(() => handlePreloader(false));
    } else {
      const searchResult = filterMovies(
        allMovies,
        searchKeyword,
        isShortMoviesChecked
      );
      if (searchResult.length === 0) {
        setIsNotFoundResult(true);
      }
      localStorage.setItem("foundMovies", JSON.stringify(searchResult));
      setFoundMovies(searchResult);
    }
    handlePreloader(false);
  }

  function handleShortMoviesChecked() {
    localStorage.setItem("shortMoviesChecked", !isShortMoviesChecked);
    setIsShortMoviesChecked(!isShortMoviesChecked);
  }

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("shortMoviesChecked"))) {
      setIsShortMoviesChecked(true);
    } else {
      setIsShortMoviesChecked(false);
    }
    handleSearchMovies();
    setFoundMovies(JSON.parse(localStorage.getItem("foundMovies")))
  }, [isShortMoviesChecked]);


  return (
    <>
      <Header loggedIn={loggedIn} main={false} />
      <main className="movies">
        <SearchForm
          isSavedFilms={false}
          onSearchMovies={handleSearchMovies}
          handleShortMoviesChecked={handleShortMoviesChecked}
          isShortMoviesChecked={isShortMoviesChecked}
        />
        {!isNotFoundResult && (
          <MoviesCardList
            isSavedFilms={false}
            movies={foundMovies}
            isUpdated={isUpdated}
            isSearchError={isSearchError}
            handleSaveMovie={handleSaveMovie}
            handleDeleteUserMovie={handleDeleteUserMovie}
          />
        )}
        {isNotFoundResult && <p className="movies__error">Ничего не найдено</p>}
      </main>
      <Footer />
    </>
  );
}

export default Movies;
