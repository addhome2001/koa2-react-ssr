import React from 'react';
import { IndexLink } from 'react-router';

const LoginPage = ({ route: { csrf } }) =>
  <div className="col-sm-6 col-sm-offset-3">
    <h1><span className="fa fa-sign-in" />Login</h1>
    <form action="/login" method="post">
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          id="username"
          className="form-control"
          name="username"
          type="text" defaultValue="username"
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          className="form-control"
          name="password"
          type="password"
          placeholder='The password is "password"'
        />
      </div>
      <input type="hidden" name="_csrf" defaultValue={ csrf } />
      <button type="submit" className="btn btn-warning btn-lg">Login</button>
    </form>
    <hr />
    <p>Or go <IndexLink to="/">Home</IndexLink >.</p>
  </div>;

export default LoginPage;
