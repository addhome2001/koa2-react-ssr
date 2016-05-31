import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router';

class Home extends Component {
    render () {
        return (
        <div>
            <Link to="/login" className="btn btn-default">
                Local Login
            </Link>
            &nbsp;
            <Link to="/about" className="btn btn-default">
                About
            </Link>
        </div>
        );
    }
}

export default Home;
