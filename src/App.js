import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Clock } from './Clock';
import { Count } from './Count';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Clock</Link>
            </li>
            <li>
              <Link to="/count">Count</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/count">
            <Count />
          </Route>
          <Route path="/">
            <Clock />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}