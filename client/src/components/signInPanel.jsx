import React from'react';
import SignIn from './signin.jsx';
import SignUp from './signup.jsx';

export const SignInPanel = (props) => (
	<div>
	  <SignIn signin={props.signin} />
	  <SignUp signup={props.signup} />
	</div>
);