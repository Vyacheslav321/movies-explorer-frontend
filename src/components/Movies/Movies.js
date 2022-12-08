import MoviesCard from "../MoviesCard/MoviesCard";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import "./Movies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Movies(props) {
  return (
    <div className="movies">
      <Header loggedIn={props.loggedIn} />
      <SearchForm />
      <MoviesCardList />
      <MoviesCard />
      <Preloader />
      <Footer />
    </div>
  );
}

export default Movies;
