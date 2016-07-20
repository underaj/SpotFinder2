import React from 'react';
import SignIn from './signin.jsx';
import SignUp from './signup.jsx';

export const InfoPanel = (props) => (
  <div className='infoPanel'>
    <h3 className='display'>{props.skateData.name}</h3>
    <p>{props.skateData.address}</p>
    <p>The skinny: {props.skateData.shortDescription}</p>
    <p>The fat: {props.skateData.detailedDescription}</p>
    <p>Bust? : {props.skateData.bust}</p>
    <SignIn signin={props.signin} />
    <SignUp signup={props.signup} />
  </div>
);
