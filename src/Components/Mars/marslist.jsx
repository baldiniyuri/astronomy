import MarsRender from "./marsrender";
import { useSelector } from "react-redux";

const MarsList = () => {
  const marsPhotos = useSelector((state) => state.photoMars);
  console.log(marsPhotos);
  return (
    <div>
      {marsPhotos.map((data, index) => (
        <MarsRender key={index} photos={data.img_src} />
      ))}
      <br />
    </div>
  );
};
export default MarsList;
