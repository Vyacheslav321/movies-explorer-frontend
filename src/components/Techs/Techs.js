import "./Techs.css";
import "../App/App.css";

function Techs() {
  return (
    <section className="techs">
      <h2 className="techs__headers techs__line">
        Технологии
      </h2>
      <h4 className="techs__header">7 технологий</h4>
      <p className="techs__description">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <ul className="techs__wrapper">
        <li className="techs__tech-card">HTML</li>
        <li className="techs__tech-card">CSS</li>
        <li className="techs__tech-card">JS</li>
        <li className="techs__tech-card">React</li>
        <li className="techs__tech-card">Git</li>
        <li className="techs__tech-card">Express.js</li>
        <li className="techs__tech-card">MongoDB</li>
      </ul>
    </section>
  );
}

export default Techs;
