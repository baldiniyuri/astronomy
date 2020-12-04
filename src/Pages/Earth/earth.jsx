import "../../App.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button, DatePicker } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import "../../Style/earth.css";
import getEarthPhotoThank from "../../Store/Modules/Earth/thank";
import EarthList from "../../Components/Earth/earthlist";

const Earth = () => {
  //***********************************************EARTH VARIABLES**************************************************************/
  const actualDate = new Date();
  const dispatch = useDispatch();
  const [hideEarth, setHideEarth] = useState(false);
  const [next, setNext] = useState([0]);
  const [error, setError] = useState(false);
  const [photoDate, setPhotoDate] = useState(
    `${actualDate.getFullYear()}-${actualDate.getMonth()}-${actualDate.getDay()}`
  );
  let counter = 0;

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
    counter = counter + 1;
    setNext(counter);
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
            <div>Earth</div>

            <div>
              <Button>
                <Link to="/astronomy">Astronomy</Link>
              </Button>
              <Button>
                <Link to="/">Home</Link>
              </Button>
              <Button>
                <Link to="/calculations">Calculations</Link>
              </Button>
            </div>

            <div>
              <Button onClick={displayEarth}>Display Earth Image</Button>
              <Button onClick={getEarthPhoto}>Get Earth Photo!</Button>
              {/*<button class="menuButtons" onClick={nextPhoto}>
            Next Photo!
          </button>
  */}
              <Button onClick={changeDate}>Set Date!</Button>
              <DatePicker type="date" id="photodate"></DatePicker>
            </div>
            {error ? (
              <div>
                Image not found, this often happens when there is no photos at
                this date, try another one.
              </div>
            ) : null}
            {hideEarth ? (
              <div id="info">
                <EarthList photoDate={photoDate} />
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
