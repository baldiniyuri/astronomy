import axios from "axios";
import { getMarsPhoto } from "./action";

export const getMarsPhotoThank = (photoDate, setError) => (dispatch) => {
  axios
    .get(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${photoDate}&api_key=RXnQpL6F3FIuJMrXfJzIvdcmaog26ygvqegMSCfs`
    )
    .then((info) => {
      console.log(info);
      dispatch(getMarsPhoto(info.data));
    })
    .catch((error) => {
      console.log(error);
      setError(true);
    });
};
