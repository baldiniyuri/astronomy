import EarthRender from "./earthrender";
import { useSelector } from "react-redux";
import "../../Style/earth.css";

const EarthList = (photoDate, next) => {
  const earthPhotos = useSelector((state) => state.photoEarth);

  return (
    <div className="image-edit">
      {earthPhotos[0].map(({ caption, image }, index) => (
        <EarthRender
          key={index}
          caption={caption}
          image={image}
          photoDate={photoDate}
        />
      ))}
    </div>
  );
};

export default EarthList;
