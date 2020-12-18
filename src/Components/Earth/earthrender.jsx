import React from "react";
import "../../Style/earth.css";

const EarthRender = ({ photoDate, image, caption }) => {
  console.log(caption);
  const dates = photoDate.photoDate.replaceAll("-", "/");

  const link = `https://api.nasa.gov/EPIC/archive/natural/${dates}/png/${image}.png?api_key=RXnQpL6F3FIuJMrXfJzIvdcmaog26ygvqegMSCfs`;
  return (
    <div>
      <img src={link} alt="earth" />
      <div className="titles-render">{caption}</div>
    </div>
  );
};

export default EarthRender;
