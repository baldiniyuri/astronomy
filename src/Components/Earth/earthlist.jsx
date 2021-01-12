import EarthRender from "./earthrender";
import { useSelector } from "react-redux";
import "../../Style/earth.css";

const EarthList = (photoDate, { next }) => {
  const earthPhotos = useSelector((state) => state.photoEarth);
  if (next === undefined) {
    next = 0;
  }
  return (
    <div>
      {earthPhotos.length === 0 ? (
        <div className="titles-earth">
          Image not found, please try another date!
        </div>
      ) : (
        <div className="image-edit">
          {earthPhotos[next].map(({ caption, image }, index) => (
            <EarthRender
              key={index}
              caption={caption}
              image={image}
              photoDate={photoDate}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default EarthList;
