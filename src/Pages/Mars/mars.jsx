import "../../App.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button, DatePicker } from "antd";
import MarsList from "../../Components/Mars/marslist";
import { getMarsPhotoThank } from "../../Store/Modules/Mars/thank";
import { useDispatch } from "react-redux";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import "../../Style/astronomy.css";
import {
  GlobalOutlined,
  HomeOutlined,
  CalculatorOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import "../../Style/mars.css";

const Mars = () => {
  const dispatch = useDispatch();
  const actualDate = new Date();
  const [hide, setHide] = useState(false);
  const [photoDate, setPhotoDate] = useState(
    `${actualDate.getFullYear()}-${actualDate.getMonth()}-${actualDate.getDay()}`
  );
  const [error, setError] = useState(false);
  const [next, setNext] = useState(0);

  const getMarsPhoto = () => {
    dispatch(getMarsPhotoThank(photoDate, setError));
  };

  const displayMars = () => {
    if (hide === false) {
      setHide(true);
    } else {
      setHide(false);
    }
  };

  const changeDate = () => {
    setError(false);
    const aux = document.getElementById("photodate").value;
    setPhotoDate(aux);
  };

  const nextPhoto = () => {
    if (next === 31) {
      return;
    }
    setNext(next + 1);
    console.log(next);
  };

  const prevPhoto = () => {
    if (next === 0) {
      return;
    }
    setNext(next - 1);
    console.log(next);
  };

  return (
    <div className="App">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
      >
        <header className="App-header">
          <div>
            <Button>
              <Link to="/earth">Earth</Link> <GlobalOutlined />
            </Button>{" "}
            <Button>
              <Link to="/">Home</Link> <HomeOutlined />
            </Button>{" "}
            <Button>
              <Link to="/calculations">Calculations</Link>{" "}
              <CalculatorOutlined />
            </Button>{" "}
            <Button>
              <Link to="/astronomy">Astronomy </Link> <EyeOutlined />
            </Button>
          </div>
          <div>Mars</div>
          <div className="mars"></div>
          <div>
            <Button onClick={prevPhoto}>
              <ArrowLeftOutlined />
              Prev Photo!
            </Button>{" "}
            <Button onClick={displayMars}>Display Mars Image</Button>{" "}
            <Button onClick={getMarsPhoto}>Get Mars Photo of the Day!</Button>{" "}
            <Button onClick={changeDate}>Change Date!</Button>{" "}
            <DatePicker id="photodate"></DatePicker>{" "}
            <Button onClick={nextPhoto}>
              Next Photo!
              <ArrowRightOutlined />
            </Button>
          </div>
          {error ? (
            <div>
              Image not found, this often happens when there is no photos at
              this date, try another one.
            </div>
          ) : null}
          {hide ? (
            <div id="info">
              <MarsList />
            </div>
          ) : (
            <div>
              You just need to set a date and them get the Astronomy photos that
              you want.
            </div>
          )}
        </header>
      </motion.div>
    </div>
  );
};
export default Mars;
