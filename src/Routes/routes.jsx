import { Switch, Route } from "react-router-dom";
import Home from "../Pages/Home/home";
import Astronomy from "../Pages/Astronomy/astronomy";
import Earth from "../Pages/Earth/earth";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/astronomy" component={Astronomy} />
      <Route exact path="/earth" component={Earth} />
    </Switch>
  );
};

export default Routes;
