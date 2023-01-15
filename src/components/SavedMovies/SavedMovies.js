import { useEffect, useState } from "react";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import { filterMovies } from "../../utils/Utils";

import "./SavedMovies.css";
import "../Movies/Movies.css";

function SavedMovies({
  loggedIn,
  isUpdated,
  handlePreloader,
  handleDeleteUserMovie,
}) {
  const [isShortUserMoviesChecked, setIsShortUserMoviesChecked] =
    useState(false);
  const [isNotFoundResult, setIsNotFoundResult] = useState(true);
  const [foundUserMovies, setFoundUserMovies] = useState([]);

  const [isSearchError, setIsSearchError] = useState(false);

  function handleSearchUserMovies() {
    const searchKeyword = localStorage.getItem("searchUserKeyword");
    const userMovies = JSON.parse(localStorage.getItem("userMovies"));
    handlePreloader(true);
    setIsNotFoundResult(false);
    setIsSearchError(false);
    const searchResult = filterMovies(
      userMovies,
      searchKeyword,
      isShortUserMoviesChecked
    );
    if (searchResult.length === 0) {
      setIsNotFoundResult(true);
    }
    localStorage.setItem("foundUserMovies", JSON.stringify(searchResult));
    setFoundUserMovies(searchResult);
    handlePreloader(false);
  }

  function handleShortUserMoviesChecked() {
    setIsShortUserMoviesChecked(!isShortUserMoviesChecked);
  }

  useEffect(() => {
    handleSearchUserMovies();
    setFoundUserMovies(JSON.parse(localStorage.getItem("foundUserMovies")))
  }, [isShortUserMoviesChecked, isUpdated]);

  return (
    <>
      <Header loggedIn={loggedIn} main={false} />
      <main className="movies">
        <SearchForm
          isSavedFilms={true}
          onSearchUserMovies={handleSearchUserMovies}
          handleShortMoviesChecked={handleShortUserMoviesChecked}
          isShortMoviesChecked={isShortUserMoviesChecked}
        />
        {!isNotFoundResult && (
          <MoviesCardList
            isSavedFilms={true}
            movies={foundUserMovies}
            isSearchError={isSearchError}
            handleDeleteUserMovie={handleDeleteUserMovie}
          />
        )}
        {isNotFoundResult && <p className="movies__error">Ничего не найдено</p>}
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
