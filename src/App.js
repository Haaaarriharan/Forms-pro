import React from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Home';
import Page from './Page';
import Pages from './Pages';
import Pages1 from './Pagess';

function App() {
  return (
    <>
    <Router>
   

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Page">
          <Page />
        </Route>
        <Route exact path="/Pages">
          <Pages />

        </Route>
        <Route exact path="/Pagess">
          <Pages1 />

        </Route>
      </Switch>

    </Router>
    
    </>
  )
}

export default App