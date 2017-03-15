import React from 'react';
import { Link } from 'react-router';
import { btn, mainText, normalText } from '../css';

const Profile = ({ route: { user } }) =>
  <div>
    <p { ...mainText }>Profile</p>
    <p { ...normalText }>Username： { user.username }</p>
    <p { ...normalText }>{ user.log }</p>
    <Link { ...btn } to="/logout">Logout</Link>
  </div>;

export default Profile;
