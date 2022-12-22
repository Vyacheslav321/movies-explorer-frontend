import "./AboutProject.css";
import "../App/App.css";

function AboutProject() {
  return (
    <section className="about-project" id="about-project-link">
      <h2 className="about-project__headers about-project__line">О проекте</h2>
      <div className="about-project__cards">
        <div className="about-project__card">
          <h4 className="about-project__subheader">
            Дипломный проект включал 5 этапов
          </h4>
          <p className="about-project__description">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="about-project__card">
          <h4 className="about-project__subheader">
            На выполнение диплома ушло 5 недель
          </h4>
          <p className="about-project__description">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about-project__scale">
        <div className="about-project__scale-column about-project__scale-column_first">
          <div className="about-project__scale-box about-project__scale-box_week_first">
            1 неделя
          </div>
          <div className="about-project__scale-description">
            Back-end
          </div>
        </div>
        <div className="about-project__scale-column about-project__scale-column_second">
          <div className="about-project__scale-box about-project__scale-box_week_second">
            4 недели
          </div>
          <div className="about-project__scale-description">Front-end</div>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
