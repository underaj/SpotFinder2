import React from'react';
import SignIn from './signin.jsx';
import SignUp from './signup.jsx';

export const SignInPanel = (props) => {

	var signIn;
	var signUp;

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

	return (
		<div>
		{signIn}
		{signUp}
		</div>
	);

};