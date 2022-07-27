import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./Create";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <main className="main">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
