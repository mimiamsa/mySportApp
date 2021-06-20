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
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/team/:id">
          <Team />
        </Route>
{/* // add route to team detail component  */}
{/* // add route to team detail component  */}
{/* // display player detail in a modal  */}
      </Switch>

    </Router>
  );
}

export default App;
