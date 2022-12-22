import React from "react";
import "./Preloader.css";

const Preloader = (props) => {
  return (
    <div className={`preloader ${props.inProgress ? "" : "preloader__hide"}`}>
      <div className="preloader__container">
        <span className="preloader__round"></span>
      </div>
    </div>
  );
};

export default Preloader;
