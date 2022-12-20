import "./Promo.css";
import web from "../../images/landing-logo.svg";

function Promo() {
  return (
    <section className="promo">
      <div className="promo__wrap">
        <img className="promo__landing-logo" src={web} alt="WEB" />
        <div className="promo__text-wrap">
          <h1 className="promo__header">
            Учебный проект студента факультета <nobr>Веб-разработки.</nobr>
          </h1>
          <p className="promo__description">
            Листайте ниже, чтобы узнать больше про&nbsp;этот проект и&nbsp;его
            создателя.
          </p>
        </div>
      </div>
      <a className="promo__button" href="#about-project-link">
        Узнать больше
      </a>
    </section>
  );
}

export default Promo;
