import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCard from "../MoviesCard/MoviesCard";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";
import "./SavedMovies.css";

function SavedMovies({loggedIn}) {
  return (
    <nav className="saved-movies">
      <Header loggedIn={loggedIn} />
      <SearchForm />
      <MoviesCardList />
      <MoviesCard />
      <Preloader />
      <Footer />
    </nav>
  );
}

export default SavedMovies;