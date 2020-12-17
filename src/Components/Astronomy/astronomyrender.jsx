import React from "react";
import "../../Style/astronomy.css";

const AstronomyRender = ({ explanation, date, url, copyright }) => {
  return (
    <div>
      <div className="description"> Date: {date}</div>
      <div className="astronomy-photo-render">
        <img src={url} alt="photoAstro" />
      </div>
      <div className="description"> Copyright: {copyright}</div>
      <br />
      <div className="description">{explanation}</div>
    </div>
  );
};

export default AstronomyRender;
