import React from 'react';
import { BrowserRouter as Router, Switch, Route,Redirect } from "react-router-dom";
import './App.css';
import Login from './components/Login';
import Header from './components/Header';
import Home from "./components/Home";
import Detail from "./components/Details";
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <div>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/detail/:id">
            <Detail />
          </Route>
          <Route component={PageNotFound} />
          
        </Switch>
      </Router>
    </div>
  );
}
export default App;