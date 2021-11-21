import './App.css';
import Dashboard from './components/Dashboard';
import Control from './components/Control';
import Navigation from './components/Navbar';
import Admin from './components/Admin';

import {
  BrowserRouter as Router,
  Switch,
  useHistory,
  Route,
  Routes,
  Redirect
} from "react-router-dom";

function App() {
  return (
    <>
      <Navigation/>
        <Switch>
          <Route exact path="/">
              <Dashboard/>
          </Route>

          {/* <Route path="/control">
              <Control/>
          </Route> */}

          <Route path="/admin">
              <Admin/>
          </Route>

        </Switch>
      
    </>
  );
}

export default App;
