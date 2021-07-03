import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Layout from './components/Layout';
import Home from './components/Home';

import './index.css';
import './fonts/Montserrat/Montserrat-Medium.ttf';
import './fonts/Montserrat/Montserrat-SemiBold.ttf';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/timeline/:id" exact component={Layout}/>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
