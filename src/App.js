import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Problems from './components/Problems';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      {/* <Route path={"/home"} exact component={Home} /> */}
      <Route path={"/"} exact>
        <Problems />
      </Route>
      <Route path={"/problems"} exact>
        <Problems />
      </Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
