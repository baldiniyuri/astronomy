import "../../App.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "antd";
import "../../Style/home.css";
import {
  EyeOutlined,
  GlobalOutlined,
  CalculatorOutlined,
  GithubOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
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
            <div>
              <Button>
                <Link to="/astronomy">
                  Astronomy <EyeOutlined />
                </Link>
              </Button>
              <Button>
                <Link to="/earth">
                  Earth <GlobalOutlined />
                </Link>
              </Button>
              <Button>
                <Link to="/calculations">
                  Calculations
                  <CalculatorOutlined />
                </Link>
              </Button>
            </div>
            <div>The Astronomer Hide</div>
            <div className="nasaLogo"></div>
            <div>This app where created using Nasa API.</div>
          </div>
          <br />
          <div>Social Medias</div>
          <a
            href="https://www.linkedin.com/in/yuri-baldini-67371918b/"
            target="_blank"
          >
            <LinkedinOutlined />
          </a>{" "}
          <a href="https://gitlab.com/yuriabaldini" target="_blank">
            <GithubOutlined />
          </a>
        </header>
      </motion.div>
    </div>
  );
};
export default Home;
