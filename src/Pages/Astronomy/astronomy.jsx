import "../../App.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button, DatePicker } from "antd";
import AstronomyList from "../../Components/Astronomy/astronomylist";
import { getAstronomyPhotoThank } from "../../Store/Modules/Astronomy/thunk";
import { useDispatch } from "react-redux";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";

const Astronomy = () => {
  //**********************************************Variables Declarations *******************************************************/
  //***********************************************Astronomy VARIABLES**********************************************************/
  const dispatch = useDispatch();
  const actualDate = new Date();
  const [hide, setHide] = useState(false);
  const [photoDate, setPhotoDate] = useState(
    `${actualDate.getFullYear()}-${actualDate.getMonth()}-${actualDate.getDay()}`
  );
  const [error, setError] = useState(false);
  const [next, setNext] = useState(0);
  //****************************************************Functions***************************************************************/
  const getAstronomyPhoto = () => {
    dispatch(getAstronomyPhotoThank(photoDate, setError));
  };

  const displayAstronomy = () => {
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
          <div>Astronomy</div>
          <div>
            <Button>
              <Link to="/earth">Earth</Link>
            </Button>{" "}
            <Button>
              <Link to="/">Home</Link>
            </Button>{" "}
            <Button>
              <Link to="/calculations">Calculations</Link>
            </Button>
          </div>
          <div>
            <Button onClick={prevPhoto}>
              <ArrowLeftOutlined />
              Prev Photo!
            </Button>{" "}
            <Button onClick={displayAstronomy}>
              Display Astronomy Image
            </Button>{" "}
            <Button onClick={getAstronomyPhoto}>
              Get Astronomy Photo of the Day!
            </Button>{" "}
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
              <AstronomyList />
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

export default Astronomy;
