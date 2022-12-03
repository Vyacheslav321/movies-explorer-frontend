import MoviesCard from "../MoviesCard/MoviesCard";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import "./SavedMovies.css";

function SavedMovies() {
  return (
    <nav className="saved-movies">
      <MoviesCardList />
      <MoviesCard />
    </nav>
  );
}

export default SavedMovies;
