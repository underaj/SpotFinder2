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

  checkIn() {
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
    var checkedInUser;
    if (this.props.user._id) {
      if (this.state.userWithinDistance === false) {
        checkin = <p>User is too far away from spot to check in</p>;
      } else {
        checkin = <button onClick={ () => this.checkIn() }>Check In</button>;
      }
    }

    if (this.props.skateSpotData.checkin.length > 0) {
      checkedInUser = this.props.skateSpotData.checkin.map((user) => <p>{user.username}</p>) ;
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



