import { Route, IndexRoute } from 'react-router';
import React from 'react';
import Login from './components/Login';
import Index from './components/Index';
import About from './components/About';
import Home from './components/Home';

const routes = (
    <Route path="/" component={Index}>
        <IndexRoute component={Home}/>
        <Route path='login-page' component={Login}></Route>
        <Route path='about' component={About}></Route>
    </Route>
);

export default routes;
