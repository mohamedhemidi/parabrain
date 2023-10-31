import { Route, Routes as Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { Task } from "./pages/Task";
import { Matrix } from "./pages/Matrix";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path="/task/:id?" element={<Task />} />
      <Route path="/matrix" element={<Matrix />} />
    </Switch>
  );
};

export default Routes;
