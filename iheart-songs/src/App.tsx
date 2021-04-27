import React from "react";
import "./App.css";
import Home from "./home";
import SongDetail from "./song_detail";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

const App: React.FC = () => {
  const browserHistory = createBrowserHistory();

  return (
    <Router history={browserHistory}>
      <Switch>
        <Route path="/song" component={SongDetail} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
