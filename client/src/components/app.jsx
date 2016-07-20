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
      sidebarDisplayed: false,
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

  changeCurrentSpot(spot, sidebar) {
    console.log('changecurrentspot', spot);
    if (spot && sidebar) {
      this.setState({
        currentSpot: spot,
        sidebarDisplayed: true,
        center: {lat: spot.lat, lng: spot.lng + 0.04},
        zoom: 13
      });
    } else {
      this.setState({
        currentSpot: undefined,
        sidebarDisplayed: false,
        center: {lat: 37.75, lng: -122.44},
        zoom: 13
      });
    }
  }

  signin(userObj) {
    this.props.apiPost('/api/users/signin', userObj)
      .then((data) => {
        console.log(data);
      });
  }

  signup(userObj) {
    this.props.apiPost('/api/users/signup', userObj)
      .then((data) => {
        console.log(data);
      });
  }


  render() {
    // our map and sideBar component goes into the div below adjacent to the h1
    var infoPanel;
    var ourMap;
    var mapStyle = {height: screen.height - 100};

    if (this.state.currentSpot && this.state.sidebarDisplayed) {
      ourMap = <div className='col-xs-8'>
                <div className='map-wrapper' style={mapStyle}>
                  <OurMap center={this.state.center} zoom={this.state.zoom} skateSpotsData={this.state.skateSpots}
                  currentSpot={this.state.currentSpot} changeCurrentSpot={this.changeCurrentSpot.bind(this)} />
                </div>
               </div>;
      infoPanel = <div className='col-xs-4'>
                    <InfoPanel skateData={this.state.currentSpot} signin={this.signin.bind(this)} signup={this.signup.bind(this)}/>
                  </div>;
    } else {
        ourMap = <div className='col-xs-12'>
                  <div className='map-wrapper' style={mapStyle}>
                    <OurMap center={this.state.center} zoom={this.state.zoom} skateSpotsData={this.state.skateSpots}
                    currentSpot={this.state.currentSpot} changeCurrentSpot={this.changeCurrentSpot.bind(this)} />
                  </div>
                 </div>;
    }
    
    return (
      <div className='row'>
        {ourMap}
        {infoPanel}
      </div>
    );
  }
}
