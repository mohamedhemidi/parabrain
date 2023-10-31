import { Route, Routes as Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { Task } from "./pages/Task";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path="/task/:id?" element={<Task />} />
    </Switch>
  );
};

export default Routes;
