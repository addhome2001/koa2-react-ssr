import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router';

class Profile extends Component {
    
    constructor (props) {
        super(props);
        this.state = {
            username: this.props.params.user
        }
    }
    
    render() {
        return (
            <div>
                <h1>Profile Page</h1>
                <p>帳號： {this.state.username}</p>
                <Link to='/logout' className="btn btn-default">登出</Link>
            </div>
        );
    }
}


export default Profile;