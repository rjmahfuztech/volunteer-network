import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import AddEvents from './components/AddEvents/AddEvents';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/addEvent">AddEvent</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/addEvent">
            <AddEvents />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
