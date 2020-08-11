import React, {useEffect} from 'react';
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import NoMatch from "./containers/NoMatch/NoMatch";
import Tokens from "./containers/Tokens/Tokens"
import NewToken from "./containers/NewToken/NewToken"

function App() {
  useEffect(() => {
    axios
      .get("/api/config")
      .then((response) => {
        console.log("Axios api config", response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/tokens" component={Tokens} />
        <Route exact path="/tokens/new" component={NewToken} />


        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
}

export default App;
