import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import { Home } from './pages/Home';
import { Team } from './pages/Team';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ Home }/>
        <Route exact path="/team/:id" component={Team}/>
      </Switch>
    </Router>
  );
}

export default App;
