import React from 'react';
import GoogleMap from 'google-map-react';
import { SkateSpot } from './skateSpot.jsx';

export default class OurMap extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <GoogleMap defaultCenter={this.props.center} defaultZoom={this.props.zoom} > 
        {this.props.skateSpotsData.map( (skateSpotData) => <SkateSpot lat={skateSpotData.lat} lng={skateSpotData.lng} skateSpotData={skateSpotData} changeCurrentSpot={this.props.changeCurrentSpot}/> ) }
      </GoogleMap>
    );
  }
};
