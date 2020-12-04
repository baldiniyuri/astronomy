import React from "react";

const AstronomyRender = ({ explanation, date, url, copyright }) => {
  return (
    <div>
      <img src={url} alt="photoAstro" />
      <div>{copyright}</div>
      <div>{date}</div>
      <div>{explanation}</div>
    </div>
  );
};

export default AstronomyRender;
