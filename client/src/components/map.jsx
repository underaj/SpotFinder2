import React from 'react';
import GoogleMap from 'google-map-react';
import SkateSpot from './skateSpot.jsx';

export default class OurMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bubbleShow: true
    }
  }

  spotOnBlur() {
    this.setState({
      bubbleShow: false
    });
  }

  bubbleShowOn() {
    this.setState({
      bubbleShow: true
    });
  }

  render() {
    return (
      <GoogleMap defaultCenter={this.props.center} defaultZoom={this.props.zoom} onClick={ () => { this.spotOnBlur() } }> 
        {this.props.skateSpotsData.map( (skateSpotData) => <SkateSpot lat={skateSpotData.lat} lng={skateSpotData.lng} skateSpotData={skateSpotData} changeCurrentSpot={this.props.changeCurrentSpot} bubbleShow={this.state.bubbleShow} bubbleShowOn={this.bubbleShowOn.bind(this)}/> ) }
      </GoogleMap>
    );
  }
};
