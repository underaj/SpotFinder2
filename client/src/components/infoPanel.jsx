import React from 'react';
import SignIn from './signin.jsx';
import SignUp from './signup.jsx';
import { haversineDistance } from '../helper.js';

export default class InfoPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newComment : '',
      username: this.props.user.username,
      locationId: this.props.skateData._id,
      userWithinDistance: undefined
    };
  } 

  checkin() {
    var distance = haversineDistance({lat: this.props.currentSpot.lat, lng: this.props.currentSpot.lng}, this.props.userLocation);
    if (distance < 0.5) {
      this.props.checkIn({locationId: this.props.currentSpot._id});    
    } else {
      this.setState({
        userWithinDistance: false
      });
    }
  }

  handleComment(e) {
    this.setState({
      newComment: e.target.value
    });
  }

  postComment(e) {
    e.preventDefault();
    if (this.state.username === 'anonymous' || this.state.newComment.length < 1) {
      console.log('nope');
      //TODO tell user to login in
    } else {
      apiPost('/api/skatespot/comment', this.state).then((data) => {
        console.log(data);
        // this.props.skateData.comments = data;
      });
    }
  }

  render() {
    var checkin;
    var checkedIn = false;
    var checkedInUser;

    if (this.props.currentSpot.checkin.length > 0) {
      checkedInUser = this.props.currentSpot.checkin.map((user) => {
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
              <h3 className='display'>{this.props.currentSpot.name}</h3>
              <p>{this.props.currentSpot.address}</p>
              <p>The skinny: {this.props.currentSpot.shortDescription}</p>
              <p>The fat: {this.props.currentSpot.detailedDescription}</p>
              <p>Bust? : {this.props.currentSpot.bust}</p>
              <p>Users checked in:</p>
              {checkedInUser}
              {checkin}
              <label>Comments</label>
              <p>Comments</p>
              {this.props.currentSpot.comments.map((comment)=>
                <p>{comment.username} : {comment.comment}</p>
              )}
              <label>Add Comment</label>
              <form onSubmit={this.postComment.bind(this)}>
                <div className="form-group">
                    <label className="sr-only" >Detailed description</label>
                    <textarea type="text" placeholder='Leave a Comment' value={this.state.newComment} 
                    onChange={this.handleComment.bind(this)} className="form-control" ></textarea>
                </div>
                <button className="btn" >Send</button>
              </form>
            </div>);
  }
}

