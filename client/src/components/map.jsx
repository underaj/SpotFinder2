import React from 'react';
import GoogleMap from 'google-map-react';
import SkateSpot from './skateSpot.jsx';

export default class OurMap extends React.Component {
  constructor(props) {
    super(props);
  }

  spotOnBlur() {
    this.props.changeCurrentSpot(undefined);
  }


  render() {
    return (
      <GoogleMap center={this.props.center} zoom={this.props.zoom} onClick={ () => { this.spotOnBlur() } }> 
        {this.props.skateSpotsData.map( (skateSpotData) => <SkateSpot lat={skateSpotData.lat} lng={skateSpotData.lng} currentSpot={this.props.currentSpot} skateSpotData={skateSpotData} changeCurrentSpot={this.props.changeCurrentSpot}/> ) }
      </GoogleMap>
    );
  }
};
