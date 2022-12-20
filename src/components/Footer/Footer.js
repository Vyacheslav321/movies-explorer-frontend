import "./Footer.css";
import "../App/App.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <h3 className="footer__description">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h3>
      <div className="footer__wrapper">
        <div className="footer__link-wrapper">
          <Link
            to="https://practicum.yandex.ru/"
            className="footer__link"
            target="_blank"
            rel="noreferrer"
          >
            Яндекс.Практикум
          </Link>
          <Link
            to="https://github.com/"
            className="footer__link"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </Link>
        </div>
        <p className="footer__copyright">
          &#169; 2022
        </p>
      </div>
    </footer>
  );
}

export default Footer;
