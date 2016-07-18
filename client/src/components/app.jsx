import React from 'react';
import OurMap from './map.jsx';

const dummyData = [
  {
    name: 'DOOP DOOP',
    icon: 'hi AJ',
    lat:37.77397,
    lng: -122.43129,
    address: '1st street',
    shortDescription: 'this spot is rad',
    detailedDescription: 'BLA BLA BLA SOOOO GOOOOOOD',
    bust: 'hello hello'
  }
];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skateSpots: dummyData,
      currentSpot: undefined,
      center: {lat: 37.75, lng: -122.44},
      zoom: 13
    };
  }

  componentDidMount() {
    this.getSkateSpots();
  }

  getSkateSpots() {
    this.props.apiGet('/api/skateSpots', (skateSpots) => {
      this.setState({
        skateSpots: skateSpots
      });
    });
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
          <OurMap center={this.state.center} zoom={this.state.zoom} skateSpotsData={this.state.skateSpots} changeCurrentSpot={this.changeCurrentSpot.bind(this)} />
        </div>
      </div>
    );
  }
}
