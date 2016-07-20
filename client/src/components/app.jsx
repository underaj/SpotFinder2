import React from 'react';
import OurMap from './map.jsx';
import InfoPanel from './infoPanel.jsx';
import {SignInPanel} from './signInPanel.jsx';
import {Nav} from './nav.jsx';

const dummyData = [
  {
    name: '',
    icon: '',
    lat: 0,
    lng: 0,
    address: '',
    shortDescription: '',
    detailedDescription: '',
    bust: 'hello hello',
    comments: [],
    checkin: []
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
      infoPanel: false,
      signInPanel: false,
      mode: 0,
      center: {lat: 37.75, lng: -122.44},
      zoom: 13
    };
  }

  componentDidMount() {
    this.getGeo();
    this.getSkateSpots();
    this.getUserDetail();
  }

  getSkateSpots() {
    this.props.apiGet('/api/skateSpots', (skateSpots) => {
      if (this.state.currentSpot) {
        skateSpots.forEach( (skateSpot) => {
          if (skateSpot._id === this.state.currentSpot._id) {
            this.setState({
              currentSpot: skateSpot,
              skatespots: skateSpots
            });
          }
        });
      } else {
        this.setState({
          skateSpots: skateSpots
        });
      }
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

<<<<<<< HEAD
  changeCurrentSpot(spot) {
    if (spot) {
=======
  changeCurrentSpot(spot, sidebar) {
    if (spot && sidebar) {
>>>>>>> (feat) show user spot on map
      this.setState({
        currentSpot: spot,
        center: {lat: spot.lat, lng: spot.lng + 0.04},
        zoom: 13,
        infoPanel: true,
        signInPanel: false
      });
    } else {
      this.setState({
        currentSpot: undefined,
        center: {lat: 37.75, lng: -122.44},
        zoom: 13,
        infoPanel: false,
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
        this.getUserDetail();
      });
  }

  signout() {
    this.props.apiGet('/api/users/logout', () => {
      this.setState({
        user: {username: 'anonymous'} 
      });
    });
  }

  getUserDetail() {
    this.props.apiGet('/api/users/userDetail', (userDetail) => {
      this.setState({
        user: userDetail 
      });
    });
  }

  checkIn(checkinObj) {
    this.props.apiPost('/api/skatespot/checkin', checkinObj)
      .then((data) => {
        this.getSkateSpots();
      });
  }

  postComment(commentObj) {
    this.props.apiPost('/api/skatespot/comment', commentObj)
    .then((data) => {
      console.log(data);
      this.getSkateSpots();
    });
  }

  clickNav(modeNum){
    this.setState({
      mode: modeNum,
      currentSpot: undefined,
      infoPanel: false,
      signInPanel: true
    });
  }

  render() {
    // our map and sideBar component goes into the div below adjacent to the h1
    var sidePanel;
    var ourMap;
    var mapStyle = {height: screen.height - (0.15*screen.height)};

    var googleMap = <div className='map-wrapper' style={mapStyle}>
                      <OurMap center={this.state.center} zoom={this.state.zoom} skateSpotsData={this.state.skateSpots}
                      currentSpot={this.state.currentSpot} changeCurrentSpot={this.changeCurrentSpot.bind(this)} user={this.state.user} userLocation={this.state.userLocation} />
                    </div>

    if (this.state.signInPanel || this.state.infoPanel) {
      ourMap = <div className='col-xs-8'>
                {googleMap}
               </div>;
      if (this.state.infoPanel) {
        sidePanel = <div className='col-xs-4'>
                      <InfoPanel currentSpot={this.state.currentSpot} user={this.state.user} userLocation={this.state.userLocation} checkIn={this.checkIn.bind(this)}  postComment={this.postComment.bind(this)}/>  
                    </div>;
      } else if (this.state.signInPanel) {
        sidePanel = <div className='col-xs-4'>
                      <SignInPanel signin={this.signin.bind(this)} signup={this.signup.bind(this)} mode={this.state.mode} userLocation={this.state.userLocation} skateSpots={this.state.skateSpots}/>
                    </div>
      }
    } else {
        ourMap = <div className='col-xs-12'>
                  {googleMap}
                 </div>;
    }
    
    return (
      <div className='row'>
        <Nav clickNav={this.clickNav.bind(this)} user={this.state.user.username} signout={this.signout.bind(this)}/>
        {ourMap}
        {sidePanel}
      </div>
    );
  }
}
