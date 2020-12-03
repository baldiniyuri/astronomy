import { Switch, Route } from "react-router-dom";
import Home from "../Pages/Home/home";
import Astronomy from "../Pages/Astronomy/astronomy";
import Earth from "../Pages/Earth/earth";
import Calculations from "../Pages/Calculations/calculations";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/astronomy" component={Astronomy} />
      <Route exact path="/earth" component={Earth} />
      <Route exact path="/calculations" component={Calculations} />
    </Switch>
  );
};

export default Routes;
