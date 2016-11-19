import { Route, IndexRoute } from 'react-router';
import React from 'react';
import LoginPage from './components/LoginPage';
import Index from './components/Index';
import About from './components/About';
import Home from './components/Home';
import Profile from './components/Profile';
import Error from './components/Error';

const routes = (initialState) =>
  <Route path="/" component={Index} initialState={initialState}>
    <IndexRoute component={Home}/>
    <Route path='login' component={LoginPage}></Route>
    <Route path='about' component={About}></Route>
    <Route path='error' component={Error}></Route>
    <Route path='profile/:user' component={Profile}></Route>
  </Route>

export default routes;
