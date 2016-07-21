import React from'react';
import SignIn from './signin.jsx';
import SignUp from './signup.jsx';
import NewSpot from './addSpot.jsx';

export const SignInPanel = (props) => {

	var signIn;
	var signUp;
  var newSpot;

	if (props.mode === 2) {
		signIn = <div>
      Sign In
      <SignIn signin={props.signin} />
		  </div>
	}
	if (props.mode === 1) {
		signIn = <div>
      Sign Up
		  <SignUp signup={props.signup} />
		  </div>
	}
  if (props.mode === 3) {
    newSpot = <div>
    I am at a spot
    <NewSpot userLocation={props.userLocation}/>
    </div>
  }

	return (
		<div>
		{signIn}
		{signUp}
    {newSpot}
		</div>
	);

};