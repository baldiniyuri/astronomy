import { Button, InputNumber } from "antd";
import { motion } from "framer-motion";
import { useState } from "react";
import "../../Style/trigonometry.css";
import { useHistory } from "react-router-dom";

const Calculations = () => {
  const history = useHistory();
  const [pure, setPure] = useState(0);
  const [hour, setHour] = useState(0);
  const [lyConverter, setLyConverter] = useState(0);
  const [lyhConverter, setLyhConverter] = useState(0);
  const [parsec, setParsec] = useState(0);
  const [parsecConverter, setParsecConverter] = useState(0);
  const [displayLy, setDisplayLy] = useState(false);
  const [displayLyh, setDisplayLyh] = useState(false);
  const [displayParsec, setDisplayParsec] = useState(false);

  const lightYearConverter = () => {
    const aux = document.getElementById("LY").value;
    setPure(aux);
    const converter = aux / 0.0000000000001057;
    setLyConverter(converter);
    setDisplayLy(true);
    setDisplayLyh(false);
    setDisplayParsec(false);
  };

  const speedLightConverter = () => {
    const pureLigth = document.getElementById("LYH").value;
    setHour(pureLigth);
    const converterSpeed = pureLigth * 1079252848.8;
    setLyhConverter(converterSpeed);
    setDisplayLyh(true);
    setDisplayLy(false);
    setDisplayParsec(false);
  };

  const parsecToLightYear = () => {
    const parsecs = document.getElementById("PARSEC").value;
    setParsec(parsecs);
    const converterParsecYerar = parsecs * 3.262;
    setParsecConverter(converterParsecYerar);
    setDisplayLyh(false);
    setDisplayLy(false);
    setDisplayParsec(true);
  };

  return (
    <div className="calculation-master">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
      >
        <div>
          <div className="titles-calculation">Astronomical Calculations</div>
          <div className="speed"></div>
          <br />

          <div className="description-calculation">
            Light Year to Kilometer converter!
          </div>
          <div className="align-buttons">
            <InputNumber id="LY" placeholder="Years"></InputNumber>{" "}
            <Button onClick={lightYearConverter} className="input-buttons">
              Calculate
            </Button>
          </div>
          {displayLy ? (
            <div className="description-calculation">
              In {pure} years the light travels {lyConverter} kms
            </div>
          ) : null}
          <br />
          <div className="description-calculation">
            Speed of Light to kilometer per hour converter!
          </div>
          <div className="align-buttons">
            <InputNumber id="LYH" placeholder="Hour"></InputNumber>{" "}
            <Button onClick={speedLightConverter} className="input-buttons">
              Calculate
            </Button>
          </div>
          {displayLyh ? (
            <div className="description-calculation">
              In {hour} hours the light travels {lyhConverter} kms.
            </div>
          ) : null}
          <br />
          <div className="description-calculation">
            {" "}
            Parsec to Light Year convertion
          </div>
          <div className="align-buttons">
            <InputNumber id="PARSEC" placeholder="Parsec"></InputNumber>{" "}
            <Button onClick={parsecToLightYear} className="input-buttons">
              Calculate
            </Button>
          </div>
          {displayParsec ? (
            <div className="description-calculation">
              {parsec} Parsecs is equivalent to {parsecConverter} light years.
            </div>
          ) : null}
          <div className="link">
            <Button
              onClick={() => history.push("/trigonometry")}
              className="input-buttons"
            >
              Trigonometry
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Calculations;
