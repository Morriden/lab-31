import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Listpage from '../Listpage/Listpage';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home" component={Listpage} />
      </Switch>
    </Router>
  );
}
