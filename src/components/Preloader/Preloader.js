import React from "react";
import "./Preloader.css";

const Preloader = ({ inProgress }) => {
  console.log(inProgress);
  return (
    <div className={`preloader ${inProgress ? "" : "preloader__hide"}`}>
      <div className="preloader__container">
        <span className="preloader__round"></span>
      </div>
    </div>
  );
};

export default Preloader;
