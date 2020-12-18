import { Switch, Route, useHistory } from "react-router-dom";
import Home from "../Pages/Home/home";
import Astronomy from "../Pages/Astronomy/astronomy";
import Earth from "../Pages/Earth/earth";
import Calculations from "../Pages/Calculations/calculations";
import Trigonometry from "../Components/Calculations/trigonometry";
import Mars from "../Pages/Mars/mars";
import {
  EyeOutlined,
  GlobalOutlined,
  CalculatorOutlined,
  RedditOutlined,
  GithubOutlined,
  LinkedinOutlined,
  RocketOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Button } from "antd";
import "../Style/routes.css";

const Routes = () => {
  const history = useHistory();

  return (
    <body className="body-style">
      <header className="home-header">
        <div className="nasaLogo" onClick={() => history.push("/")}></div>
        <div className="header-align">
          <Button className="page-buttons">
            <Link to="/astronomy">
              Astronomy <EyeOutlined />
            </Link>
          </Button>{" "}
          <Button className="page-buttons">
            <Link to="/earth">
              Earth <GlobalOutlined />
            </Link>
          </Button>{" "}
          <Button className="page-buttons">
            <Link to="/calculations">
              Calculations
              <CalculatorOutlined />
            </Link>
          </Button>{" "}
          <Button className="page-buttons">
            <Link to="/mars">
              Mars <RedditOutlined />
            </Link>
          </Button>{" "}
          <Button className="page-buttons">
            <Link to="/">
              About <RocketOutlined />
            </Link>
          </Button>
        </div>
      </header>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/astronomy" component={Astronomy} />
          <Route exact path="/earth" component={Earth} />
          <Route exact path="/calculations" component={Calculations} />
          <Route exact path="/trigonometry" component={Trigonometry} />
          <Route exact path="/mars" component={Mars} />
        </Switch>
      </div>
      <footer className="footer-style">
        <div className="social-icons">
          <div className="titles">Social Medias: </div>

          <a
            href="https://www.linkedin.com/in/yuri-baldini-67371918b/"
            target="_blank"
          >
            <LinkedinOutlined />
          </a>
          {"          "}
          <a href="https://gitlab.com/yuriabaldini" target="_blank">
            <GithubOutlined />
          </a>
        </div>
      </footer>
    </body>
  );
};

export default Routes;
