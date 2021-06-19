import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import { Home } from './pages/Home';


function App() {
  return (
    <Router>
      {/* <AppContainer>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </AppContainer> */}
      <Switch>
        <Route path="/">
          <Home />
        </Route>
{/* // add route to team detail component  */}
{/* // add route to team detail component  */}
{/* // display player detail in a modal  */}
      </Switch>

    </Router>
  );
}

export default App;
