import "../../App.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button, DatePicker } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import "../../Style/earth.css";
import getEarthPhotoThank from "../../Store/Modules/Earth/thank";
import EarthList from "../../Components/Earth/earthlist";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import {
  EyeOutlined,
  HomeOutlined,
  CalculatorOutlined,
  RedditOutlined,
} from "@ant-design/icons";
const Earth = () => {
  //***********************************************EARTH VARIABLES**************************************************************/
  const actualDate = new Date();
  const dispatch = useDispatch();
  const [hideEarth, setHideEarth] = useState(false);
  const [next, setNext] = useState(0);
  const [error, setError] = useState(false);
  const [photoDate, setPhotoDate] = useState(
    `${actualDate.getFullYear()}-${actualDate.getMonth()}-${actualDate.getDay()}`
  );

  //****************************************************** Functions ************************************************************/

  const getEarthPhoto = () => {
    dispatch(getEarthPhotoThank(photoDate, setError));
  };

  const displayEarth = () => {
    if (hideEarth === false) {
      setHideEarth(true);
    } else {
      setHideEarth(false);
    }
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

  const changeDate = () => {
    const aux = document.getElementById("photodate").value;
    setPhotoDate(aux);
    setNext(0);
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
            <div>
              <Button>
                <Link to="/astronomy">Astronomy</Link> <EyeOutlined />
              </Button>{" "}
              <Button>
                <Link to="/">Home</Link>
                <HomeOutlined />
              </Button>{" "}
              <Button>
                <Link to="/calculations">Calculations</Link>{" "}
                <CalculatorOutlined />
              </Button>{" "}
              <Button>
                <Link to="/mars">Mars</Link> <RedditOutlined />
              </Button>
            </div>
            <div>Earth</div>
            <div className="earthLogo"></div>
            <div>
              <Button onClick={prevPhoto}>
                <ArrowLeftOutlined />
                Prev Photo!
              </Button>{" "}
              <Button onClick={displayEarth}>Display Earth Image</Button>{" "}
              <Button onClick={getEarthPhoto}>Get Earth Photo!</Button>{" "}
              <Button onClick={changeDate}>Set Date!</Button>{" "}
              <DatePicker type="date" id="photodate"></DatePicker>{" "}
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
            {hideEarth ? (
              <div id="info">
                <EarthList photoDate={photoDate} next={next} />
              </div>
            ) : (
              <div>
                You just need to set a date and them get the Earth photo that
                you want.
              </div>
            )}
          </div>
        </header>
      </motion.div>
    </div>
  );
};

export default Earth;
