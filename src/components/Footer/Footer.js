import "./Footer.css";
import "../App/App.css";

function Footer() {
  return (
    <footer className="footer">
      <h3 className="footer__description text__normal text__link text__gray">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h3>
      <div className="footer__wrapper">
        <div className="footer__link-wrapper">
          <a
            className="footer__link text__normal text__link text__white"
            href="https://practicum.yandex.ru/"
            target="_blank"
            rel="noreferrer"
          >
            Яндекс.Практикум
          </a>
          <a
            className="footer__link text__normal text__link text__white"
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
        <p className="footer__copyright text__normal text__link text__gray">
          &#169; 2022
        </p>
      </div>
    </footer>
  );
}

export default Footer;
