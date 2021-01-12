import { useState } from "react";
import { motion } from "framer-motion";
import { Button, DatePicker } from "antd";
import AstronomyList from "../../Components/Astronomy/astronomylist";
import { getAstronomyPhotoThank } from "../../Store/Modules/Astronomy/thunk";
import { useDispatch } from "react-redux";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import "../../Style/astronomy.css";

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
  const getAstronomyPhoto = async () => {
    dispatch(getAstronomyPhotoThank(await photoDate, setError));

    if (hide === false) {
      setTimeout(() => {
        displayAstronomy();
      }, 3000);
    }
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
    <div className="astronomy-master">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
      >
        <div className="titles-astronomy">Astronomy</div>
        <div className="astronomy-align">
          <div className="astronomyLogo"></div>
          <div className="display-astronomy-buttons">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 3 }}
            >
              <div>
                <Button onClick={prevPhoto} className="astronomy-buttons">
                  <ArrowLeftOutlined />
                  Prev Photo!
                </Button>{" "}
                <Button
                  onClick={displayAstronomy}
                  className="astronomy-buttons"
                >
                  Display Astronomy Image
                </Button>{" "}
                <Button
                  onClick={getAstronomyPhoto}
                  className="astronomy-buttons"
                >
                  Get Astronomy Photo of the Day!
                </Button>{" "}
                <Button onClick={changeDate} className="astronomy-buttons">
                  Change Date!
                </Button>{" "}
                <DatePicker
                  id="photodate"
                  className="astronomy-buttons"
                ></DatePicker>{" "}
                <Button onClick={nextPhoto} className="astronomy-buttons">
                  Next Photo!
                  <ArrowRightOutlined />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="display-astronomy-photo">
          {error ? (
            <div className="description">
              Image not found, this often happens when there are no images at
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
        </div>
      </motion.div>
    </div>
  );
};

export default Astronomy;
