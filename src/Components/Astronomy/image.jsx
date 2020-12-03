import React from "react";

const Image = (props) => {
  return (
    <div>
      <img src={props.data} alt="space" />
    </div>
  );
};

export default Image;
