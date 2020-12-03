import "../../App.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "antd";

const Home = () => {
  return (
    <div className="App">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
      >
        <header className="App">
          <div>
            <div>Home</div>
            <div>
              <Button>
                <Link to="/astronomy">Astronomy</Link>
              </Button>
              <Button>
                <Link to="/earth">Earth</Link>
              </Button>
            </div>
          </div>
        </header>
      </motion.div>
    </div>
  );
};
export default Home;
