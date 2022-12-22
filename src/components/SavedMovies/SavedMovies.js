import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import "./SavedMovies.css";
import "../Movies/Movies.css";

function SavedMovies({ loggedIn }) {
  return (
    <>
      <Header loggedIn={loggedIn} main={false} />
      <main className="movies">
        <SearchForm />
        <MoviesCardList savedFilms={true} />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
