import React from 'react';
import {apiPost} from '../helper.js';

export default class NewSpot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spotName: '',
      address:'',
      lat: this.props.userLocation.lat,
      lng: this.props.userLocation.lng,
      shortDesc: '',
      detailedDesc: '',
      bust: ''
    }
  }

  handleSpotName(e) {
    console.log(this.state, e.target.value);
    this.setState({
      spotName: e.target.value
    });
  }

  handleAddress(e) {
    console.log(this.state, e.target.value);
    this.setState({
      address: e.target.value
    });
  }

  handleShortDesc(e) {
    console.log(this.state, e.target.value);
    this.setState({
      shortDesc: e.target.value
    });
  }

  handleDetailedDesc(e) {
    console.log(this.state, e.target.value);
    this.setState({
      detailedDesc: e.target.value
    });
  }

  handleBust(e) {
    console.log(this.state, e.target.value);
    this.setState({
      bust: e.target.value
    });
  }

  handleLocationButton(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log(this.state, e.target.value);
    this.setState({
      lat: this.props.userLocation.lat,
      lng: this.props.userLocation.lng
    });
  }

  handleAddSpot(e){
    e.preventDefault();
    e.stopPropagation();
    apiPost('/api/skatespot', this.state);
  }

	render() {
  	return (
  		<div>
  		<form>
  		    <div className="form-group">
  		        <label className="sr-only">Spot name</label>
  		        <input type="text" placeholder="name" className="form-control" id="spotName" value={this.state.spotName} onChange={this.handleSpotName.bind(this)} />
  		    </div>
  		    <div className="form-group">
  		        <label className="sr-only">Address</label>
  		        <input type="text" name="subject" placeholder="address" className="form-control" id="address" value={this.state.address} onChange={this.handleAddress.bind(this)} />
  		    </div>
  		    <div className="form-group">
  		        <label className="sr-only">Short description</label>
  		        <input type="text" name="subject" placeholder="" className="form-control" id="short" value={this.state.shortDesc} onChange={this.handleShortDesc.bind(this)} />
  		    </div>
  		    <div className="form-group">
  		        <label className="sr-only" >Detailed description</label>
  		        <textarea type="text" name="message" placeholder="" className="form-control" id="detailed" value={this.state.detailedDesc} onChange={this.handleDetailedDesc.bind(this)}></textarea>
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