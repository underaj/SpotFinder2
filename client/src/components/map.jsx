import React from 'react';
import GoogleMap from 'google-map-react';

export default class OurMap extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {

    // };
  }

  render() {
    return (
      <GoogleMap 
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}> 
      </GoogleMap>
    );
  }
};