import React, {Component} from 'react';
import { Link } from 'react-router';

class Index extends Component {
    render() {
        return (
            <div>
                <Link to="/login-page">Login</Link>
                <Link to="/about">Ab</Link>
                { this.props.children }
            </div>
        );
    }
}

export default Index;
