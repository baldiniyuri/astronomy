import axios from "axios";
import { getEarthPhoto } from "./action";

const getEarthPhotoThank = (photoDate, setError) => (dispatch) => {
  axios
    .get(
      `https://api.nasa.gov/EPIC/api/natural/date/${photoDate}?api_key=RXnQpL6F3FIuJMrXfJzIvdcmaog26ygvqegMSCfs`
    )
    .then((info) => {
      console.log(info);
      dispatch(getEarthPhoto(info.data));
    })
    .catch((error) => {
      console.log(error);
      setError(true);
    });
};

export default getEarthPhotoThank;
