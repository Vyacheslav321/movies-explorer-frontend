import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import "./Movies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";

function Movies({
  loggedIn,
  movies,
  onSearchMovies,
  isNotFoundResult,
  isSearchError,
  handleSaveMovie,
  handleDeleteUserMovie,
  inProgress,
  handleShortMoviesChecked,
  isShortMoviesChecked,
}) {
  return (
    <>
      <Preloader inProgress={inProgress} />
      <Header loggedIn={loggedIn} main={false} />
      <main className="movies">
        <SearchForm
          isSavedFilms={false}
          onSearchMovies={onSearchMovies}
          handleShortMoviesChecked={handleShortMoviesChecked}
          isShortMoviesChecked={isShortMoviesChecked}
        />
        {!isNotFoundResult && (
          <MoviesCardList
            isSavedFilms={false}
            movies={movies}
            // isNotFoundResult={isNotFoundResult}
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
