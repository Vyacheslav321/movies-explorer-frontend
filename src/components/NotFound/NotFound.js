import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <main className="not-found">
      <div className="not-found__container">
        <h2 className="not-found__header text__normal text__white">404</h2>
        <p className="not-found__description text__normal text__white">
          Страница не найдена
        </p>
      </div>
      <Link to="/" className="not-found__link text__normal">
        Назад
      </Link>
    </main>
  );
}

export default NotFound;
