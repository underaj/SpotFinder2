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
      locationId: this.props.currentSpot._id,
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
      //done- tell user to login in
    } else {
      this.props.postComment(this.state);
      this.setState({
        newComment: ''
      });
    }
  }

  render() {
    var checkin;
    var checkinHeader;
    var checkedInUser;
    var postedComment;
    var checkedIn = false;
    
    if (this.props.currentSpot.checkin.length > 0) {
      checkinHeader = <p>Skaters currently at this spot!</p>;
      checkedInUser = this.props.currentSpot.checkin.map((user) => {
        if (user._id === this.props.user._id) {
          checkedIn = true;
        }

        return (<p>{user.username}</p>);
      });
    } else {
      checkinHeader = <p>THE AREA IS CLEAR!!!</p>;
    }

    if (this.props.user._id && checkedIn === false) {
      if (this.state.userWithinDistance === false) {
        checkin = <p>You are too far away.</p>;
      } else {
        checkin = <button className="btn" onClick={ () => this.checkin() }>Check In</button>;
      }
    }

    if (!this.props.user._id && this.state.newComment.length > 0) {
      postedComment = <p>User has to be signed in to leave comments</p>;
    }

    return (<div className='infoPanel'>
              <h3 className='display'>{this.props.currentSpot.name}</h3>
              <p>{this.props.currentSpot.address}</p>
              <p>The skinny: {this.props.currentSpot.shortDescription}</p>
              <p>The fat: {this.props.currentSpot.detailedDescription}</p>
              <p>Bust? : {this.props.currentSpot.bust}</p>
              {checkinHeader}
              {checkedInUser}
              {checkin}
              <p><label>Comments</label></p>
              {this.props.currentSpot.comments.map((comment)=> {
                return (<div className="comment-div">
                          <img src="img/skateboarder.png" alt="User Image" height="90" width="120" className="comment-image"/>
                          <span className="comment-username">{comment.username}</span> : {comment.comment}
                        </div>);
              })}
              <form onSubmit={this.postComment.bind(this)}>
                <div className="form-group">
                    <label className="sr-only" >Detailed description</label>
                    <textarea type="text" placeholder='Leave a Comment' value={this.state.newComment} 
                    onChange={this.handleComment.bind(this)} className="form-control" ></textarea>
                </div>
                <button className="btn" >Send</button>
              </form>
              {postedComment}
            </div>);
  }
}

