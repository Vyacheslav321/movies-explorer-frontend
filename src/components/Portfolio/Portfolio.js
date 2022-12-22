import "./Portfolio.css";
import "../App/App.css";

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__header">Портфолио</h2>
      <a
        className="portfolio__link portfolio__line"
        href="https://vyacheslav321.github.io/how-to-learn/"
        target="_blank"
        rel="noreferrer"
      >
        <p className="portfolio__text-link">Статичный сайт</p>
        <p className="portfolio__arrow">&#8599;</p>
      </a>
      <a
        className="portfolio__link portfolio__line"
        href="https://vyacheslav321.github.io/russian-travel/"
        target="_blank"
        rel="noreferrer"
      >
        <p className="portfolio__text-link">Адаптивный сайт</p>
        <p className="portfolio__arrow">&#8599;</p>
      </a>
      <a
        className="portfolio__link"
        href="https://mesto.gorochnyi.nomoredomains.icu"
        target="_blank"
        rel="noreferrer"
      >
        <p className="portfolio__text-link">Одностраничное приложение</p>
        <p className="portfolio__arrow">&#8599;</p>
      </a>
    </section>
  );
}

export default Portfolio;
