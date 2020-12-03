import "../../App.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button, DatePicker } from "antd";
import Copyright from "../../Components/Astronomy/copyright";
import Dates from "../../Components/Astronomy/date";
import Explanation from "../../Components/Astronomy/explanation";
import Image from "../../Components/Astronomy/image";
import axios from "axios";

const Astronomy = () => {
  //**********************************************Variables Declarations *******************************************************/
  //***********************************************Astronomy VARIABLES**********************************************************/
  const actualDate = new Date();
  const [copyright, setCopyright] = useState("");
  const [explanation, setExplanation] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");
  const [hide, setHide] = useState(false);
  //const [photodate, setPhotoDate] = useState("2019-05-30");
  const [photodate, setPhotoDate] = useState(
    `${actualDate.getFullYear()}-${actualDate.getMonth()}-${actualDate.getDay()}`
  );
  const [next, setNext] = useState([0]);
  //****************************************************Function ***************************************************************/
  const getAstronomyPhoto = () => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=RXnQpL6F3FIuJMrXfJzIvdcmaog26ygvqegMSCfs&date=${photodate}`
      )
      .then((info) => {
        setCopyright(info.data.copyright);
        setExplanation(info.data.explanation);
        setDate(info.data.date);
        setImage(info.data.url);
      })
      .catch((error) => console.log(error));
  };

  const displayAstronomy = () => {
    if (hide === false) {
      setHide(true);
    } else {
      setHide(false);
    }
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
          {hide ? (
            <div id="info">
              <div>
                <Image data={image} />
                <br />
                <Copyright data={copyright} /> <Dates data={date} />
              </div>
              <br />
              <Explanation data={explanation} />
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
