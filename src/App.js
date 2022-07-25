import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Result from "./pages/Result";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/result">
            <Result />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
