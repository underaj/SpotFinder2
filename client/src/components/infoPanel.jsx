import React from 'react';
import SignIn from './signin.jsx';
import SignUp from './signup.jsx';
import { haversineDistance } from '../helper.js';

export class InfoPanel extends React.Component {
  checkIn() {
    var distance = haversineDistance({lat: this.props.skateData.lat, lng: this.props.skateData.lng}, this.props.userLocation);
    if (distance < 0.5) {
      console.log(distance);
      this.props.checkIn({locationId: this.props.skateData._id});  
    } else {
      console.log('too far', distance);
    }
  }

  render() {
    var checkin = this.props.user._id ? <button onClick={ () => this.checkIn() }>Check In</button> : '';
    var checkedInUser;
    if (this.props.skateData.checkin.length > 0) {
      checkedInUser = this.props.skateData.checkin.map((user) => <p>{user.username}</p>) ;
    }

    return (<div className='infoPanel'>
              <h3 className='display'>{this.props.skateData.name}</h3>
              <p>{this.props.skateData.address}</p>
              <p>The skinny: {this.props.skateData.shortDescription}</p>
              <p>The fat: {this.props.skateData.detailedDescription}</p>
              <p>Bust? : {this.props.skateData.bust}</p>
              <p>Users checked in:</p>
              {checkedInUser}
              {checkin}
            </div>);
  }
}



