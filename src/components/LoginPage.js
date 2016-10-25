import React, {Component} from 'react';
import { IndexLink  } from 'react-router';

class LoginPage extends Component {
    
    constructor (props) {
        super(props);
    }
    
    render() {
      const csrf = this.props.csrf;
      return (
          <div className="col-sm-6 col-sm-offset-3">
              <h1><span className="fa fa-sign-in"></span> Login</h1>
              <form action="/login" method="post">
                  <div className="form-group">
                      <label>Username</label>
                      <input className="form-control" name="username" type="text" defaultValue="username" />
                  </div>
                  <div className="form-group">
                      <label>Password</label>
                      <input className="form-control" name="password" type="password" placeholder='The password is "password"' />
                  </div>
                  <input type="hidden" name="_csrf" defaultValue={csrf} />
                  <button type="submit" className="btn btn-warning btn-lg">Login</button>
              </form>
              <hr/>
              <p>Or go <IndexLink to="/">home</IndexLink >.</p>
          </div>);
    }
}

export default LoginPage;