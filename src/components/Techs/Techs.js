import "./Techs.css";
import "../App/App.css";

function Techs() {
  return (
    <section className="techs">
      <h2 className="techs__headers techs__line text__header text__normal text__white">Технологии</h2>
      <h4 className="techs__header">7 технологий</h4>
      <p className="techs_description text__description text__normal text__white">
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
