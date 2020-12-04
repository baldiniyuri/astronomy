import AstronomyRender from "./astronomyrender";
import { useSelector } from "react-redux";

const AstronomyList = () => {
  const astronomyPhotos = useSelector((state) => state.photo);

  return (
    <div>
      {astronomyPhotos.map(({ explanation, date, url, copyright }, index) => (
        <AstronomyRender
          key={index}
          explanation={explanation}
          url={url}
          date={date}
          copyright={copyright}
        />
      ))}
    </div>
  );
};

export default AstronomyList;
