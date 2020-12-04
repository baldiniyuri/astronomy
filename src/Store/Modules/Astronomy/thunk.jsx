import axios from "axios";
import { getAstronomyPhoto } from "./action";

export const getAstronomyPhotoThank = (photoDate, setError) => (dispatch) => {
  axios
    .get(
      `https://api.nasa.gov/planetary/apod?api_key=RXnQpL6F3FIuJMrXfJzIvdcmaog26ygvqegMSCfs&date=${photoDate}`
    )
    .then((info) => {
      dispatch(getAstronomyPhoto(info.data));
    })
    .catch((error) => {
      console.log(error);
      setError(true);
    });
};
