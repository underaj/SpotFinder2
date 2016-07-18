import React from 'react';
import OurMap from './map.jsx';    

const dummyLocation = [];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: dummyLocation,
      center: {lat: 39.74632, lng: -122.85734},
      zoom: 9
    }
  }

  render() {
    // our map and sideBar component goes into the div below adjacent to the h1
    return (
      <div>
        <div className='map-container'>
          <OurMap center={this.state.center} zoom={this.state.zoom}/>
        </div>
      </div>
    );
  }
}
