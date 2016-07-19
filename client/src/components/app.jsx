import React from 'react';
import OurMap from './map.jsx';
import {InfoPanel} from './infoPanel.jsx';

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
    console.log('here');
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
    if (spot !== undefined) {
      this.setState({
        currentSpot: spot,
        center: {lat: spot.lat, lng: spot.lng},
        zoom:12,
      });
    } else {
      this.setState({
        currentSpot: undefined
      });
    }

    console.log(this.state.center)
  }

  render() {
    // our map and sideBar component goes into the div below adjacent to the h1
    var infoPanel;
    var ourMap;
    if (this.state.currentSpot === undefined) {
      ourMap = <div className='full-map col-md-12'>
                <OurMap center={this.state.center} zoom={this.state.zoom} skateSpotsData={this.state.skateSpots} currentSpot={this.state.currentSpot} changeCurrentSpot={this.changeCurrentSpot.bind(this)}/>
               </div>;
    } else {
      ourMap = <div className='map col-md-8'>
                <OurMap center={this.state.center} zoom={this.state.zoom} skateSpotsData={this.state.skateSpots} currentSpot={this.state.currentSpot} changeCurrentSpot={this.changeCurrentSpot.bind(this)}/>
               </div>;
      infoPanel = <div className='col-md-4'>
                    <InfoPanel skateData={this.state.currentSpot}/>
                  </div>;
    }
    console.log(infoPanel);
    return (
      <div className='row'>
        {ourMap}
        {infoPanel}
      </div>
    );
  }
}
