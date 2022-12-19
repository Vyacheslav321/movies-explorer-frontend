import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import "./SavedMovies.css";
import "../Movies/Movies.css";

function SavedMovies({ loggedIn }) {
  return (
    <nav className="movies">
      <Header loggedIn={loggedIn} main={false} />
      <SearchForm />
      <MoviesCardList savedFilms={true} />
      <Footer />
    </nav>
  );
}

export default SavedMovies;
