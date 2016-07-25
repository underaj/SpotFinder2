import React from'react';
import SignIn from './signin.jsx';
import SignUp from './signup.jsx';
import NewSpot from './addSpot.jsx';
import Info from './info.jsx';

export const SidePanel = (props) => {

	var signIn;
	var signUp;
  var newSpot;
  var info;

	if (props.mode === 1) {
		signUp = <h3 className='display'>
              Sign Up
	            <SignUp signup={props.signup} user={props.user}/>
		         </h3>

  } else if (props.mode === 2) {
    signIn = <h3 className='display'>
              Sign In
              <SignIn signin={props.signin} />
            </h3>
	} else if (props.mode === 3) {
    newSpot = <h3 className='display'>
                Add a spot using my location 
                <NewSpot userLocation={props.userLocation} skateSpots={props.skateSpots} getSkateSpots={props.getSkateSpots}/>
              </h3>
  } else if (props.mode === 4) {
    info = <Info currentSpot={props.currentSpot} userObj={props.userObj} userLocation={props.userLocation} 
           checkIn={props.checkIn} postComment={props.postComment}/>
  }

	return (
		<div>
  		{signIn}
  		{signUp}
      {newSpot}
      {info}
		</div>
	);
};
