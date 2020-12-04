import "../../App.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button, DatePicker } from "antd";
import AstronomyList from "../../Components/Astronomy/astronomylist";
import { getAstronomyPhotoThank } from "../../Store/Modules/Astronomy/thunk";
import { useDispatch } from "react-redux";

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
            </Button>
            <Button>
              <Link to="/">Home</Link>
            </Button>
            <Button>
              <Link to="/calculations">Calculations</Link>
            </Button>
          </div>
          <div>
            <Button onClick={displayAstronomy}>Display Astronomy Image</Button>{" "}
            <Button onClick={getAstronomyPhoto}>
              Get Astronomy Photo of the Day!
            </Button>{" "}
            {/*<button class="menuButtons" onClick={nextPhoto}>
            Next Photo!
          </button>
  */}
            <Button onClick={changeDate}>Change Date!</Button>
            <DatePicker id="photodate"></DatePicker>
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
