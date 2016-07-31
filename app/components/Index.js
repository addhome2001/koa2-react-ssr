import React, {Component} from 'react';

class Index extends Component {
    render() {
      const { initialState } = this.props.routes[0];
      return (
           <div className="container">
             <div className="jumbotron text-center clearfix">
                 <h1><span className="fa fa-lock"></span> Node Authentication</h1>
                 {
                   React.cloneElement(this.props.children, {
                     csrf: initialState.csrf
                   })
                 }
            </div>
           </div>
        );
    }
}

export default Index;
