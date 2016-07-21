import React from 'react';
import { apiPost, haversineDistance } from '../helper.js'; 

export default class NewSpot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address:'',
      lat: this.props.userLocation.lat,
      lng: this.props.userLocation.lng,
      shortDescription: '',
      detailedDescription: '',
      bust: ''
    }
  }

  handleSpotName(e) {
    this.setState({
      name: e.target.value
    });
  }

  handleAddress(e) {
    this.setState({
      address: e.target.value
    });
  }

  handleShortDesc(e) {
    this.setState({
      shortDescription: e.target.value
    });
  }

  handleDetailedDesc(e) {
    this.setState({
      detailedDescription: e.target.value
    });
  }

  handleBust(e) {
    this.setState({
      bust: e.target.value
    });
  }

  handleLocationButton(e) {
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      lat: this.props.userLocation.lat,
      lng: this.props.userLocation.lng
    });
  }

  handleAddSpot(e){
    e.preventDefault();
    e.stopPropagation();
    var conflict = false;
    this.props.skateSpots.forEach(function(spot) {
      if (haversineDistance(spot, this.state) > 0.5) {
        conflict = true;
      }
    });
    if (conflict === true) {
      // TODO show some hidden element and let the client know they are too close to a current spot
    } else {
        apiPost('/api/skatespots', this.state);
        this.setState({
          name: '',
          address:'',
          lat: this.props.userLocation.lat,
          lng: this.props.userLocation.lng,
          shortDescription: '',
          detailedDescription: '',
          bust: ''
        });
      }
  }

	render() {
  	return (
  		<div>
  		<form>
  		    <div className="form-group">
  		        <label className="sr-only">Spot name</label>
  		        <input type="text" placeholder="Spot Name" className="form-control" id="spotName" value={this.state.name} onChange={this.handleSpotName.bind(this)} />
  		    </div>
  		    <div className="form-group">
  		        <label className="sr-only">Address</label>
  		        <input type="text" name="subject" placeholder="address" className="form-control" id="address" value={this.state.address} onChange={this.handleAddress.bind(this)} />
  		    </div>
  		    <div className="form-group">
  		        <label className="sr-only">Short description</label>
  		        <input type="text" name="subject" placeholder="Short description" className="form-control" id="short" value={this.state.shortDescription} onChange={this.handleShortDesc.bind(this)} />
  		    </div>
  		    <div className="form-group">
  		        <label className="sr-only" >Detailed description</label>
  		        <textarea type="text" name="message" placeholder="Detailed description : Whats there? Is the ground good?" className="form-control" id="detailed" value={this.state.detailedDescription} onChange={this.handleDetailedDesc.bind(this)}></textarea>
  		    </div>
  		    <div className="form-group">
  		        <label className="sr-only">Bust</label>
  		        <input type="text" name="subject" placeholder="bust" className="form-control" id="bust" value={this.state.bust} onChange={this.handleBust.bind(this)}/>
  		    </div>
          <button className="btn" onClick={this.handleLocationButton.bind(this)}>Use my location</button>
  		    <button className="btn" onClick={this.handleAddSpot.bind(this)}>Add spot</button>
  		</form>
  		</div>
  		);
	}
};