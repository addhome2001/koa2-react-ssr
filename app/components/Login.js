import React, {Component} from 'react';

class Login extends Component {
    render() {
        return (
            <div>
                <form action="/login" method="POST">
                <input type="hidden" name="_csrf" value="{{csrf}}" />
                <input name="username" type="text" value="username" />
                <input name="password" type="password" placeholder='The password is "password"' />
                <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default Login;