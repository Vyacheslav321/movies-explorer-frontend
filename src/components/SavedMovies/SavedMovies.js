import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
// import Preloader from "../Preloader/Preloader";

import "./SavedMovies.css";
import "../Movies/Movies.css";

function SavedMovies({
  loggedIn,
  movies,
  handleDeleteUserMovie,
  onSearchUserMovies,
  isNotFoundResult,
  // inProgress,
  handleShortUserMoviesChecked,
  isShortUserMoviesChecked,
}) {
  return (
    <>
      <Header loggedIn={loggedIn} main={false} />
      <main className="movies">
        <SearchForm
          isSavedFilms={true}
          onSearchUserMovies={onSearchUserMovies}
          handleShortMoviesChecked={handleShortUserMoviesChecked}
          isShortMoviesChecked={isShortUserMoviesChecked}
        />
        {!isNotFoundResult && (
          <MoviesCardList
            isSavedFilms={true}
            movies={movies}
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
