import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import "./Movies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Movies({ loggedIn }) {
  return (
    <>
      <Header loggedIn={loggedIn} main={false} />
      <main className="movies">
        <SearchForm />
        <MoviesCardList savedFilms={false} />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
