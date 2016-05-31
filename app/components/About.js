import React, { Component } from 'react';
import { IndexLink } from 'react-router';

class About extends Component {
    render() {
        return (
            <div>
              <IndexLink className="btn btn-default" Link to="/">Home</IndexLink >
              <p>About</p>              
            </div>
        );
    }
}

export default About;
