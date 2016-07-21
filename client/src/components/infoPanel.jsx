import React from 'react';
import SignIn from './signin.jsx';
import SignUp from './signup.jsx';
import { haversineDistance } from '../helper.js';

export class InfoPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userWithinDistance: undefined
    };
  }

  checkin() {
    var distance = haversineDistance({lat: this.props.skateSpotData.lat, lng: this.props.skateSpotData.lng}, this.props.userLocation);
    if (distance < 0.5) {
      this.props.checkIn({locationId: this.props.skateSpotData._id});    
    } else {
      this.setState({
        userWithinDistance: false
      });
    }
  }

  render() {
    var checkin;
    var checkedIn = false;
    var checkedInUser;

    if (this.props.skateSpotData.checkin.length > 0) {
      checkedInUser = this.props.skateSpotData.checkin.map((user) => {
        if (user._id === this.props.user._id) {
          checkedIn = true;
        }

        return (<p>{user.username}</p>);
      });
    }

    if (this.props.user._id && checkedIn === false) {
      if (this.state.userWithinDistance === false) {
        checkin = <p>User is too far away from spot to check in</p>;
      } else {
        checkin = <button onClick={ () => this.checkin() }>Check In</button>;
      }
    }

    return (<div className='infoPanel'>
              <h3 className='display'>{this.props.skateSpotData.name}</h3>
              <p>{this.props.skateSpotData.address}</p>
              <p>The skinny: {this.props.skateSpotData.shortDescription}</p>
              <p>The fat: {this.props.skateSpotData.detailedDescription}</p>
              <p>Bust? : {this.props.skateSpotData.bust}</p>
              <p>Users checked in:</p>
              {checkedInUser}
              {checkin}
            </div>);
  }
}



