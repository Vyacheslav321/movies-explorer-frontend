import './Promo.css';
import web from "../../images/header/landing-logo.png";

function Promo() {

  
  return (
      <section className="promo">
        <img className="promo__landing-logo" src={web} alt="WEB" />
        <h1 className='promo__header promo__text'>Учебный проект студента факультета Веб-разработки.</h1>
        <p className='promo__description promo__text'>Листайте ниже, чтобы узнать больше <br/>про этот проект и его создателя.</p>
        <button className='promo__button'>Узнать больше</button>
      </section>
  );
}

export default Promo;
