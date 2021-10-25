import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Components
import NavBar from './components/NavBar';
import Landing from './components';
import SignLog from './components/SignLog';
import PageNotFound from './components/404';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
    <Route path="/404" component={PageNotFound} />
        <Route exact path="/" component={Landing} />
        <Route path="/signlog" component={SignLog} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
