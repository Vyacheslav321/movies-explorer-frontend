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
        <h2 className="not-found__header">404</h2>
        <p className="not-found__description">
          Страница не найдена
        </p>
      </div>
      <Link className="not-found__link" onClick={goBack}>
        Назад
      </Link>
    </main>
  );
}

export default NotFound;
