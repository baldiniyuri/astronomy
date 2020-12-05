import { Switch, Route } from "react-router-dom";
import Home from "../Pages/Home/home";
import Astronomy from "../Pages/Astronomy/astronomy";
import Earth from "../Pages/Earth/earth";
import Calculations from "../Pages/Calculations/calculations";
import Trigonometry from "../Components/Calculations/trigonometry";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/astronomy" component={Astronomy} />
      <Route exact path="/earth" component={Earth} />
      <Route exact path="/calculations" component={Calculations} />
      <Route exact path="/trigonometry" component={Trigonometry} />
    </Switch>
  );
};

export default Routes;
