import React from "react";

const Photo = (props) => {
  console.log(props);
  const date = props.date.replaceAll("-", "/");
  const link = `https://api.nasa.gov/EPIC/archive/natural/${date}/png/${props.data}.png?api_key=RXnQpL6F3FIuJMrXfJzIvdcmaog26ygvqegMSCfs`;
  return (
    <div>
      <img src={link} alt="earth" />
    </div>
  );
};

export default Photo;
