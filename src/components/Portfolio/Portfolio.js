import "./Portfolio.css";
import "../App/App.css";
import arrow from "../../images/arrow.png"

function Portfolio() {
  return (
    <nav className="portfolio">
      <h2 className="portfolio__header">Портфолио</h2>
      <a className="portfolio__link portfolio__line" href="#">
        <p className="portfolio__text-link">Статичный сайт</p>
        <img className="portfolio__arrow" src={arrow} alt="перейти" />
      </a>
      <a className="portfolio__link portfolio__line" href="#">
        <p className="portfolio__text-link">Адаптивный сайт</p>
        <img className="portfolio__arrow" src={arrow} alt="перейти" />
      </a>
      <a className="portfolio__link" href="#">
        <p className="portfolio__text-link">Одностраничное приложение</p>
        <img className="portfolio__arrow" src={arrow} alt="перейти" />
      </a>
    </nav>
  );
}

export default Portfolio;
