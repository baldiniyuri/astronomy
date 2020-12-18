import React from "react";

const MarsRender = ({ photos }) => {
  return (
    <div className="mars-render">
      <img src={photos} alt="mars" />
    </div>
  );
};

export default MarsRender;
