import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

function MoviesCardList({savedFilms}) {
  return (
    <div className="movies-card-list">
      <MoviesCard />
    </div>
  );
}

export default MoviesCardList;
