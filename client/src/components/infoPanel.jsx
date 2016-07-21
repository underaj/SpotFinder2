import React from 'react';
import SignIn from './signin.jsx';
import SignUp from './signup.jsx';

<<<<<<< HEAD
export const InfoPanel = (props) => (
  <div className='infoPanel'>
    <h3 className='display'>{props.skateData.name}</h3>
    <p>{props.skateData.address}</p>
    <p>The skinny: {props.skateData.shortDescription}</p>
    <p>The fat: {props.skateData.detailedDescription}</p>
    <p>Bust? : {props.skateData.bust}</p>
  </div>
);
=======


export const InfoPanel = (props) => {

  var checkin = props.user._id ? <button onClick={() => props.checkIn({user:props.user, locationId: props.skateData._id})}>Check In</button> : '';

  return (<div className='infoPanel'>
            <h3 className='display'>{props.skateData.name}</h3>
            <p>{props.skateData.address}</p>
            <p>The skinny: {props.skateData.shortDescription}</p>
            <p>The fat: {props.skateData.detailedDescription}</p>
            <p>Bust? : {props.skateData.bust}</p>
            <SignUp signup={props.signup} />
            <SignIn signin={props.signin} />
            {checkin}
          </div>);
}


>>>>>>> render checkin button when logged in
