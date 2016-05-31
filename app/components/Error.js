import React, {Component} from 'react';

class Error extends Component {
    render() {
        return (
            <div>
              <p className="alert alert-danger">密碼錯誤</p>  
              <IndexLink className="btn btn-default" Link to="/login">重新登入</IndexLink >            
            </div>
        );
    }
}

export default Error;