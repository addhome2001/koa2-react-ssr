import React from 'react';
import { Link } from 'react-router';

const Profile = ({ route: { user } }) =>
  <div>
    <h1>Profile Page</h1>
    <p>Username： { user.username }</p>
    <p>{ user.log }</p>
    <Link to="/logout" className="btn btn-default">Logout</Link>
  </div>;

export default Profile;
