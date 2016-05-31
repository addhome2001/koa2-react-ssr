import React, {Component} from 'react';
import { Link } from 'react-router';

class Index extends Component {
    render() {
        return (
           <div className="container">
             <div className="jumbotron text-center clearfix">
                 <h1><span className="fa fa-lock"></span> Node Authentication</h1>
                 { this.props.children }
            </div>
           </div>
        );
    }
}

export default Index;
