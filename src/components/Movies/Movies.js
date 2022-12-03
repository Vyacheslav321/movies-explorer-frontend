import MoviesCard from "../MoviesCard/MoviesCard";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import "./Movies.css";

function Movies() {
  return (
    <div className="movies">
      <SearchForm />
      <MoviesCardList />
      <MoviesCard />
      <Preloader />
    </div>
  );
}

export default Movies;
