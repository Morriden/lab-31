import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Data from '../../Containers/ListpageContainer/ListpageContainer';
import DetailsPageContainer from '../../Containers/DetailspageContainer/DetailspageContainer';
import Header from '../Header/Header';

export default function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={Data} />
        <Route path="/character/:id" component={DetailsPageContainer} />
      </Switch>
    </Router>
  );
}
