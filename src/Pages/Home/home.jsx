import { motion } from "framer-motion";
import "../../Style/home.css";

const Home = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
      >
        <div className="titles-home">The Astronomer Hide</div>
        <div className="home-align">
          <div className="homeLogo"></div>
          <div className="home-description">
            This is a website where you can access three different Nasa's API.
            You can choose de data that you want and see our beautiful planet,
            photos from Earth taken by de ISS, or if you prefer you can check
            the new photos that the astronomic community has sent, or maybe you
            prefer some amazing photos from Mars, taken by the Mars Hoover
            Curiosity.
          </div>
        </div>
        <div className="display-home">
          <div className="titles">This app were created using Nasa API.</div>
        </div>
      </motion.div>
    </div>
  );
};
export default Home;
