import EarthRender from "./earthrender";
import { useSelector } from "react-redux";

const EarthList = (photoDate) => {
  const earthPhotos = useSelector((state) => state.photoEarth);
  console.log("arrayEarth", earthPhotos);

  return (
    <div>
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
