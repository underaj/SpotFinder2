import React from 'react';
import GoogleMap from 'google-map-react';
import SkateSpot from './skateSpot.jsx';
import UserSpot from './userSpot.jsx';


export default class OurMap extends React.Component {
  constructor(props) {
    super(props);
  }

  spotOnBlur() {
    this.props.changeCurrentSpot(undefined, false);
  }

  createMapOptions(maps){
      return {
      panControl: false,
      mapTypeControl: false,
      styles: [{ stylers: [{ 'saturation': -100 }, { 'gamma': 0.8 }, { 'lightness': 4 }, { 'visibility': 'on' }] }]
    };
  }

  render() {
    return (
      <GoogleMap options={this.createMapOptions} center={this.props.center} zoom={this.props.zoom} onClick={ () => { this.spotOnBlur() } }>
        <UserSpot user={this.props.user} lat={this.props.userLocation.lat} lng={this.props.userLocation.lng} />
        {this.props.skateSpotsData.map( (skateSpotData) => {
          return ( <SkateSpot lat={skateSpotData.lat} lng={skateSpotData.lng} 
                   skateSpotData={skateSpotData} changeCurrentSpot={this.props.changeCurrentSpot} /> );
        })}
      </GoogleMap>
    );
  }
};
