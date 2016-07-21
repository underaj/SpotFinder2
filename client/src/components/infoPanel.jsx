import React from 'react';
import SignIn from './signin.jsx';
import SignUp from './signup.jsx';

export const InfoPanel = (props) => {

  var checkin = props.user._id ? <button onClick={() => props.checkIn({locationId: props.skateData._id})}>Check In</button> : '';
  var checkedInUser;
  if (props.skateData.checkin.length > 0) {
    checkedInUser = props.skateData.checkin.map((user) => <p>{user.username}</p>) ;
  }

  return (<div className='infoPanel'>
            <h3 className='display'>{props.skateData.name}</h3>
            <p>{props.skateData.address}</p>
            <p>The skinny: {props.skateData.shortDescription}</p>
            <p>The fat: {props.skateData.detailedDescription}</p>
            <p>Bust? : {props.skateData.bust}</p>
            <p>Users checked in:</p>
            {checkedInUser}
            {checkin}
          </div>);
}
