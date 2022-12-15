import "../App/App.css"
import "./MoviesCard.css";
import Pic from "../../images/movies/movies__pic-1.jpg"

function MoviesCard() {
  return (
    <div className="movies-card">
      <img className="movies-card__image" src={Pic} />
      <div className="movies-card__wrap">
        <h3 className="movies-card__header text__white">33 слова о дизайне</h3>
        <p className="movies-card__duration text__normal text__gray">1ч 17м</p>
      </div>
    </div>
  );
}

export default MoviesCard;
