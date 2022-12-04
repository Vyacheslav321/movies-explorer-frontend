import "./AboutProject.css";
import "../App/App.css";

function AboutProject() {
  return (
    <section className="about-project" id="about-project-link">
      <h2 className="about-project__headers about-project__line text__header text__normal text__white">
        О проекте
      </h2>
      <div className="about-project__cards">
        <div className="about-project__card">
          <h4 className="about-project__subheader text__subheader text__normal text__white">
            Дипломный проект включал 5 этапов
          </h4>
          <p className="about-project__description text__description text__normal text__white">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="about-project__card">
          <h4 className="about-project__subheader text__subheader text__normal text__white">
            На выполнение диплома ушло 5 недель
          </h4>
          <p className="about-project__description text__description text__normal text__white">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about-project__scale">
        <div className="about-project__scale-column about-project__scale-column_first">
          <div className="about-project__scale-box about-project__scale-box_week_first text__normal text__black">
            1 неделя
          </div>
          <div className="about-project__scale-description text__gray-light">
            Back-end
          </div>
        </div>
        <div className="about-project__scale-column about-project__scale-column_second">
          <div className="about-project__scale-box about-project__scale-box_week_second text__normal text__white">
            4 недели
          </div>
          <div className="about-project__scale-description text__gray-light">
            Front-end
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
