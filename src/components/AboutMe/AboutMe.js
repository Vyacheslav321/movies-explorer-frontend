import "./AboutMe.css";
import "../App/App.css";
import photo from "../../images/about-me__photo.jpg";

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="text__header text__normal text__white about-me__line ">
        Студент
      </h2>
      <div className="about-me__wrapper">
        <img className="about-me__photo" src={photo} alt="фотография" />
        <div className="about-me__text-block">
          <p className="about-me__name text__normal text__white">Виталий</p>
          <h5 className="about-me__frontend text__white">
          Фронтенд-разработчик, 30&nbsp;лет
          </h5>
          <p className="about-me__description text__normal text__white">
          Я&nbsp;родился и&nbsp;живу в&nbsp;Саратове, закончил факультет экономики СГУ. У
меня есть жена и&nbsp;дочь. Я&nbsp;люблю слушать музыку, а&nbsp;ещё увлекаюсь
бегом. Недавно начал кодить. С&nbsp;2015 года работал в&nbsp;компании &laquo;СКБ
Контур&raquo;. После того, как прошёл курс по&nbsp;веб-разработке, начал
заниматься фриланс-заказами и&nbsp;ушёл с&nbsp;постоянной работы.
          </p>
          <a
            href="https://github.com/Vyacheslav321"
            className="about-me__github text__white "
          >
            Github
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
