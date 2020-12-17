import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button, DatePicker } from "antd";
import MarsList from "../../Components/Mars/marslist";
import { getMarsPhotoThank } from "../../Store/Modules/Mars/thank";
import { useDispatch } from "react-redux";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
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

  const getMarsPhoto = async () => {
    dispatch(getMarsPhotoThank(await photoDate, setError));

    if (hide === false) {
      setTimeout(() => {
        displayMars();
      }, 3000);
    }
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
        <div className="titles-mars">Mars</div>
        <div className="mars-align">
          <div className="marsLogo"></div>
          <div className="display-mars-buttons">
            <div>
              <Button onClick={prevPhoto} className="mars-buttons">
                <ArrowLeftOutlined />
                Prev Photo!
              </Button>{" "}
              <Button onClick={displayMars} className="mars-buttons">
                Display Mars Image
              </Button>{" "}
              <Button onClick={getMarsPhoto} className="mars-buttons">
                Get Mars Photo of the Day!
              </Button>{" "}
              <Button onClick={changeDate} className="mars-buttons">
                Change Date!
              </Button>{" "}
              <DatePicker id="photodate" className="mars-buttons"></DatePicker>{" "}
              <Button onClick={nextPhoto} className="mars-buttons">
                Next Photo!
                <ArrowRightOutlined />
              </Button>
            </div>
          </div>
        </div>
        <div className="display-mars-photo">
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
        </div>
      </motion.div>
    </div>
  );
};
export default Mars;
