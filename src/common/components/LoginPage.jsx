import React from 'react';
import { IndexLink } from 'react-router';
import { btn, mainText, form, formGroup } from '../css';

const LoginPage = ({ route: { csrf } }) =>
  <div>
    <p { ...mainText }>Login</p>
    <form { ...form } action="/login" method="post">
      <div { ...formGroup }>
        <input
          required
          name="username"
          type="text"
          placeholder="Username"
        />
      </div>
      <div { ...formGroup }>
        <input
          required
          name="password"
          type="password"
          placeholder="Password"
        />
      </div>
      <input type="hidden" name="_csrf" defaultValue={ csrf } />
      <button { ...btn } type="submit">Submit</button>
      <IndexLink { ...btn } to="/">Home</IndexLink>
    </form>
  </div>;

export default LoginPage;
