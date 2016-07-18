import React from 'react';
import OurMap from './map.jsx';    

const dummyData = [
  {
    id: 1,
    location: {lat:37.77397, lng: -122.43129},
    icon: 'hi AJ',
    shortDescription: 'this spot is rad'
  },
  {
    id: 2,
    location: {lat:37.73, lng: -122.45129},
    icon: 'hi Conrad',
    shortDescription: 'this spot is rad'
  },
  {
    id: 3,
    location: {lat:37.71397, lng: -122.42129},
    icon: 'hi Nat',
    shortDescription: 'this spot is rad'
  }
];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: dummyData,
      currentSpot: undefined,
      center: {lat: 37.75, lng: -122.44},
      zoom: 13
    }
  }

  changeCurrentSpot(spot) {
    console.log(spot);
    this.setState({
      currentSpot: spot
    });
  }

  render() {
    // our map and sideBar component goes into the div below adjacent to the h1
    return (
      <div>
        <div className='map-container'>
          <OurMap center={this.state.center} zoom={this.state.zoom} skateSpotsData={dummyData} changeCurrentSpot={this.changeCurrentSpot.bind(this)}/>
        </div>
        
      </div>
    );
  }
}
