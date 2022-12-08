import { Link, useHistory } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  const history = useHistory();
  function goBack() {
    history.goBack();
  }

  return (
    <main className="not-found">
      <div className="not-found__container">
        <h2 className="not-found__header text__normal text__white">404</h2>
        <p className="not-found__description text__normal text__white">
          Страница не найдена
        </p>
      </div>
      <p className="not-found__link text__normal" onClick={goBack}>
        Назад
      </p>
    </main>
  );
}

export default NotFound;
