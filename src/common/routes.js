/* eslint-disable react/prop-types */
import { Route, IndexRoute } from 'react-router';
import React from 'react';
import LoginPage from './components/LoginPage';
import Master from './components/Master';
import About from './components/About';
import Home from './components/Home';
import Profile from './components/Profile';
import ErrorPage from './components/ErrorPage';
import NotFound from './components/NotFound';

const routes = ({ csrf, user }) =>
  <Route path="/" component={ Master }>
    <IndexRoute component={ Home } />
    <Route path="login" csrf={ csrf } component={ LoginPage } />
    <Route path="about" component={ About } />
    <Route path="error" component={ ErrorPage } />
    <Route path="profile" user={ user } component={ Profile } />
    <Route path="*" component={ NotFound } />
  </Route>;

export default routes;
