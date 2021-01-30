import { BrowserRouter as Router, Switch } from "react-router-dom";

import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";

function App() {
  return (
    <Router>
      <Switch>
        <PublicRoute
          restricted={true}
          component={LoginPage}
          path="/login"
          exact
        />
        <PrivateRoute component={DashboardPage} path="/" exact />
      </Switch>
    </Router>
  );
}

export default App;
