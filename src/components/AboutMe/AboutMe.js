import "./AboutMe.css";
import "../App/App.css";
import photo from "../../images/about-me__photo.jpg";

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__line text__header text__normal text__white">Студент</h2>
      <img className="about-me__photo" src={photo} alt="фотография" />
      <p className="about-me__name text__normal text__white">Виталий</p>
      <h5 className="about-me__frontend text__white ">Фронтенд-разработчик, 30 лет</h5>
      <p className="about-me__description text__description text__normal text__white">
        Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня
        есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно
        начал кодить. С 2015 года работал в компании «СКБ Контур». После того,
        как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и
        ушёл с постоянной работы.
      </p>
      <a href="https://github.com/Vyacheslav321" className="about-me__github text__white ">
        Github
      </a>
    </section>
  );
}

export default AboutMe;
