import "./Promo.css";
import web from "../../images/header/landing-logo.png";

function Promo() {
  return (
    <section className="promo">
      <div className="promo__wrap">
        <img className="promo__landing-logo" src={web} alt="WEB" />
        <div className="promo__text-wrap">
          <h1 className="promo__header text__normal text__white">
            Учебный проект студента факультета <nobr>Веб-разработки.</nobr>
          </h1>
          <p className="promo__description text__normal text__white">
            Листайте ниже, чтобы узнать больше про&nbsp;этот проект и&nbsp;его создателя.
          </p>
        </div>
      </div>
      <button className="promo__button">Узнать больше</button>
    </section>
  );
}

export default Promo;
