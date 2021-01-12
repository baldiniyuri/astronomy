import AstronomyRender from "./astronomyrender";
import { useSelector } from "react-redux";
import "../../Style/astronomy.css";

const AstronomyList = () => {
  const astronomyPhotos = useSelector((state) => state.photo);

  return (
    <div>
      {astronomyPhotos.length === 0 ? (
        <div className="description">Please select another date!</div>
      ) : (
        <div>
          {astronomyPhotos.map(
            ({ explanation, date, url, copyright }, index) => (
              <AstronomyRender
                key={index}
                explanation={explanation}
                url={url}
                date={date}
                copyright={copyright}
              />
            )
          )}
        </div>
      )}
    </div>
  );
};

export default AstronomyList;
