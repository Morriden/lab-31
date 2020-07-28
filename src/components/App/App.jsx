import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Data from '../../Containers/ListpageContainer/ListpageContainer';
import DetailsPageContainer from '../../Containers/DetailspageContainer/DetailspageContainer';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home" component={Data} />
        <Route path="/character/:id" component={DetailsPageContainer} />
      </Switch>
    </Router>
  );
}
