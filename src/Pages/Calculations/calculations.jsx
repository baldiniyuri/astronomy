import "../../App.css";
import { Link } from "react-router-dom";
import { Button, InputNumber } from "antd";
import { motion } from "framer-motion";
import { useState } from "react";

const Calculations = () => {
  const [lyConverter, setLyConverter] = useState(0);
  const [lyhConverter, setLyhConverter] = useState(0);

  const lightYearConverter = () => {
    const pure = document.getElementById("LY").value;
    const converter = pure / 0.0000000000001057;
    setLyConverter(converter);
  };

  const speedLightConverter = () => {
    const pureLigth = document.getElementById("LYH").value;
    const converterSpeed = pureLigth * 1079252848.8;
    setLyhConverter(converterSpeed);
  };
  return (
    <div className="App">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
      >
        <header className="App">
          <div>
            <div>Astronomical Calculations</div>
            <div>
              <Button>
                <Link to="/astronomy">Astronomy</Link>
              </Button>{" "}
              <Button>
                <Link to="/earth">Earth</Link>
              </Button>{" "}
              <Button>
                <Link to="/">Home</Link>
              </Button>
            </div>
            <div>Light Year to Kilometer converter!</div>
            <InputNumber id="LY"></InputNumber>{" "}
            <Button onClick={lightYearConverter}>Calculate</Button>
            <div>Current Light year in Kilometer = {lyConverter} km</div>
            <br />
            <div>Speed of Ligth to km/h converter!</div>
            <InputNumber id="LYH"></InputNumber>{" "}
            <Button onClick={speedLightConverter}>Calculate</Button>
            <div>Current speed of light to km/h = {lyhConverter} km</div>
          </div>
        </header>
      </motion.div>
    </div>
  );
};

export default Calculations;
