import "../../App.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button, DatePicker } from "antd";
import { useState } from "react";
import Caption from "../../Components/Earth/caption";
import Photo from "../../Components/Earth/photo";
import axios from "axios";
import "../../Style/earth.css";

const Earth = () => {
  //***********************************************EARTH VARIABLES**************************************************************/
  const actualDate = new Date();
  const [caption, setCaption] = useState("");
  const [photo, setPhoto] = useState("");
  const [hideEarth, setHideEarth] = useState(false);
  const [next, setNext] = useState([0]);
  // const [photodate, setPhotoDate] = useState("2019-05-30");
  const [photodate, setPhotoDate] = useState(
    `${actualDate.getFullYear()}-${actualDate.getMonth()}-${actualDate.getDay()}`
  );
  let counter = 0;

  //****************************************************** Functions ************************************************************/

  const getEarthPhoto = () => {
    axios
      .get(
        `https://api.nasa.gov/EPIC/api/natural/date/${photodate}?api_key=RXnQpL6F3FIuJMrXfJzIvdcmaog26ygvqegMSCfs`
      )
      .then((info) => {
        setCaption(info.data[next].caption);
        setPhoto(info.data[next].image);
      })
      .catch((error) => console.log(error));
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
            {hideEarth ? (
              <div id="info">
                <div>
                  <Photo data={photo} date={photodate} />
                </div>
                <Caption data={caption} />
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
