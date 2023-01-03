import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import "./Movies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Movies({ loggedIn, inProgress }) {
  return (
    <>
      <Header loggedIn={loggedIn} main={false} />
      <main className="movies">
        <SearchForm />
        <MoviesCardList savedFilms={false} inProgress={inProgress}/>
      </main>
      <Footer />
    </>
  );
}

export default Movies;
