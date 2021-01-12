import { motion } from "framer-motion";
import { Button, DatePicker } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import "../../Style/earth.css";
import getEarthPhotoThank from "../../Store/Modules/Earth/thank";
import EarthList from "../../Components/Earth/earthlist";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";

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

  const getEarthPhoto = async () => {
    dispatch(getEarthPhotoThank(await photoDate, setError));

    if (hideEarth === false) {
      setTimeout(() => {
        displayEarth();
      }, 3000);
    }
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
    getEarthPhoto();
    setNext(next + 1);
  };

  const prevPhoto = () => {
    if (next === 0) {
      return;
    }
    getEarthPhoto();
    setNext(next - 1);
  };

  const changeDate = () => {
    const aux = document.getElementById("photodate").value;
    setPhotoDate(aux);
    setNext(0);
  };

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
      >
        <div className="titles-earth">Earth</div>
        <div className="earth-align">
          <div className="earthLogo"></div>
          <div className="display-earth-buttons">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 3 }}
            >
              <div>
                <Button onClick={prevPhoto} className="earth-buttons">
                  <ArrowLeftOutlined />
                  Prev Photo!
                </Button>{" "}
                <Button onClick={displayEarth} className="earth-buttons">
                  Display Earth Image
                </Button>{" "}
                <Button onClick={getEarthPhoto} className="earth-buttons">
                  Get Earth Photo!
                </Button>{" "}
                <Button onClick={changeDate} className="earth-buttons">
                  Set Date!
                </Button>{" "}
                <DatePicker
                  type="date"
                  id="photodate"
                  className="earth-buttons"
                ></DatePicker>{" "}
                <Button onClick={nextPhoto} className="earth-buttons">
                  Next Photo!
                  <ArrowRightOutlined />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="display-earth-photo">
          {error ? (
            <div className="titles-earth">
              Image not found, this often happens when there is no photos at
              this date, try another one.
            </div>
          ) : null}
          {hideEarth ? (
            <div id="info">
              <EarthList photoDate={photoDate} next={next} />
            </div>
          ) : (
            <div className="titles-earth">
              You just need to set a date and them get the Earth photo that you
              want.
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Earth;
