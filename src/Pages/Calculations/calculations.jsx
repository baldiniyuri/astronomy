import "../../App.css";
import { Link } from "react-router-dom";
import { Button, InputNumber } from "antd";
import { motion } from "framer-motion";
import { useState } from "react";
import "../../Style/trigonometry.css";
import {
  EyeOutlined,
  HomeOutlined,
  GlobalOutlined,
  RedditOutlined,
} from "@ant-design/icons";
const Calculations = () => {
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
                <Link to="/astronomy">Astronomy</Link> <EyeOutlined />
              </Button>{" "}
              <Button>
                <Link to="/earth">Earth</Link> <GlobalOutlined />
              </Button>{" "}
              <Button>
                <Link to="/">Home</Link> <HomeOutlined />
              </Button>{" "}
              <Button>
                <Link to="/mars">Mars</Link> <RedditOutlined />
              </Button>{" "}
              <Button>
                <Link to="/trigonometry">Spherical Trigonometry</Link>
              </Button>
            </div>
            <div className="speed"></div>
            <br />
            <div>Light Year to Kilometer converter!</div>
            <InputNumber id="LY" placeholder="Years"></InputNumber>{" "}
            <Button onClick={lightYearConverter}>Calculate</Button>
            {displayLy ? (
              <div>
                In {pure} years the light travels {lyConverter} kms
              </div>
            ) : null}
            <br />
            <div>Speed of Light to kilometer per hour converter!</div>
            <InputNumber id="LYH" placeholder="Hour"></InputNumber>{" "}
            <Button onClick={speedLightConverter}>Calculate</Button>
            {displayLyh ? (
              <div>
                In {hour} hours the light travels {lyConverter} kms.
              </div>
            ) : null}
            <br />
            <div> Parsec to Light Year convertion</div>
            <InputNumber id="PARSEC" placeholder="Parsec"></InputNumber>{" "}
            <Button onClick={parsecToLightYear}>Calculate</Button>
            {displayParsec ? (
              <div>
                {parsec} Parsecs is equivalent to {parsecConverter} light years.
              </div>
            ) : null}
          </div>
        </header>
      </motion.div>
    </div>
  );
};

export default Calculations;
