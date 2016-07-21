import React from 'react';
import OurMap from './map.jsx';
import {InfoPanel} from './infoPanel.jsx';
import {SignInPanel} from './signInPanel.jsx';

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
      user: {username: 'anonymous'},
      userLocation: {lat:0, lng:0},
      skateSpots: dummyData,
      currentSpot: undefined,
      sidebarDisplayed: false,
      center: {lat: 37.75, lng: -122.44},
      zoom: 13,
      signInPanel: false,
      mode: 0
    };
  }

  componentDidMount() {
    this.getSkateSpots();
    this.getGeo();
    this.getUserDetail();
  }

  getSkateSpots() {
    this.props.apiGet('/api/skateSpots', (skateSpots) => {
      this.setState({
        skateSpots: skateSpots
      });
    });
  }

  getGeo() {
    this.props.getGeo((position) => {
      var location = position.coords;
      this.setState({
        userLocation: {lat: location.latitude, lng: location.longitude}
      });
    });
  }

  changeCurrentSpot(spot, sidebar) {
    if (spot && sidebar) {
      this.setState({
        currentSpot: spot,
        sidebarDisplayed: true,
        center: {lat: spot.lat, lng: spot.lng + 0.04},
        zoom: 13,
        signInPanel: false
      });
    } else {
      this.setState({
        currentSpot: undefined,
        sidebarDisplayed: false,
        center: {lat: 37.75, lng: -122.44},
        zoom: 13,
        signInPanel: false
      });
    }
  }

  signin(userObj) {
    this.props.apiPost('/api/users/signin', userObj)
      .then((data) => {
        this.getUserDetail();
      });
  }

  signup(userObj) {
    this.props.apiPost('/api/users/signup', userObj)
      .then((data) => {
        //console.log(data);
      });
  }

  getUserDetail() {
    this.props.apiGet('/api/users/userDetail', (userDetail) => {
      this.setState({
        user: userDetail 
      });
    });
  }


  clickMe(modeNum){
    console.log(modeNum);
    this.setState({
      mode: modeNum,
      // sidebarDisplayed: false,
      currentSpot: undefined,
      signInPanel: true
    });
    console.log('it tickles! ARRRRRGH!');
  }

  render() {
    // our map and sideBar component goes into the div below adjacent to the h1
    var infoPanel;
    var ourMap;
    var signInPanel;
    var mapStyle = {height: screen.height - 100};

    if (this.state.currentSpot && this.state.sidebarDisplayed) {
      ourMap = <div className='col-xs-8'>
                <div className='map-wrapper' style={mapStyle}>
                  <OurMap center={this.state.center} zoom={this.state.zoom} skateSpotsData={this.state.skateSpots}
                  currentSpot={this.state.currentSpot} changeCurrentSpot={this.changeCurrentSpot.bind(this)} user={this.state.user} userLocation={this.state.userLocation} />
                </div>
               </div>;
      infoPanel = <div className='col-xs-4'>
                    <InfoPanel skateData={this.state.currentSpot} signin={this.signin.bind(this)} signup={this.signup.bind(this)}/>
                  </div>;
    } else if (this.state.signInPanel && this.state.currentSpot === undefined) {
      ourMap = <div className='col-xs-8'>
                <div className='map-wrapper' style={mapStyle}>
                  <OurMap center={this.state.center} zoom={this.state.zoom} skateSpotsData={this.state.skateSpots}
                  currentSpot={this.state.currentSpot} changeCurrentSpot={this.changeCurrentSpot.bind(this)} user={this.state.user} userLocation={this.state.userLocation} />
                </div>
               </div>;
      signInPanel = <div className='col-xs-4'>
      <SignInPanel signin={this.signin.bind(this)} signup={this.signup.bind(this)} mode={this.state.mode}/>
      </div>
                    
    } else {
        ourMap = <div className='col-xs-12'>
                  <div className='map-wrapper' style={mapStyle}>
                    <OurMap center={this.state.center} zoom={this.state.zoom} skateSpotsData={this.state.skateSpots}
                    currentSpot={this.state.currentSpot} changeCurrentSpot={this.changeCurrentSpot.bind(this)} user={this.state.user} userLocation={this.state.userLocation} />
                  </div>
                 </div>;
    }
    
    return (
      <div className='row'>
       <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
          <span className="navbar-brand" onClick={() => { this.clickMe(2)}}>SignIn
          </span>
          <span className="navbar-brand" onClick={() => { this.clickMe(1)}}>SignUp
          </span>
          <span className="navbar-brand" onClick={() => { this.clickMe(3)}}>Add a new spot
          </span>
          </div>
        </div>
      </nav>
        {ourMap}
        {infoPanel}
        {signInPanel}
      </div>
    );
  }
}
