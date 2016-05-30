import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router';

class Logout extends Component {
    render() {
        return (
            <div>
                <p>Hello World</p>
                <Link to='/logout'>登出</Link>
            </div>
        );
    }
}


export default Logout;