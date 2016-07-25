import React from 'react';
import OurMap from './map.jsx';
import {SidePanel} from './sidePanel.jsx';
import {Nav} from './nav.jsx';

const dummyData = [
  {
    name: '',
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
      sidePanel: false,
      //mode to keep track of what panel to render
      //1 = signUP, 2 = signIn, 3 = add a spot
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
    //queries the db for all the skatespots, puts them on the map
    this.props.apiGet('/api/skateSpots', (skateSpots) => {
      if (this.state.currentSpot) {
        skateSpots.forEach( (skateSpot) => {
          if (skateSpot._id === this.state.currentSpot._id) {
            //update the state from the server
            this.setState({
              currentSpot: skateSpot
            });
          }
        });
      }
      
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

  signin(userObj) {
    this.props.apiPost('/api/users/signin', userObj)
      .then((data) => {
        this.getUserDetail();
      });
  }

  signup(userObj) {
    this.props.apiPost('/api/users/signup', userObj)
      .then((data) => {
        //checks db to prevent duplicate usernames
        if (data === userObj.username) {
          //by setting the username to null, renders duplicate username user notification in signup component
          this.setState({
            user: {username: null}
          }).then(() => {
            this.getUserDetail();
          });
        } else {
          this.setState({
            sidePanel: false
          });
          this.getUserDetail();
        }
      });
  }

  signout() {
    this.props.apiGet('/api/users/logout', () => {
      this.setState({
        user: {username: 'anonymous'} 
      });
    });
  }

  //set the user property on the state for rendering greeting, check-ins and comments
  getUserDetail() {
    this.props.apiGet('/api/users/userDetail', (userDetail) => {
      this.setState({
        user: userDetail 
      });
    });
  }

  checkIn(checkinObj) {
    this.props.apiPost('/api/skatespot/checkin', checkinObj)
      .done((data) => {
        this.getSkateSpots();
      });
  }

  postComment(commentObj) {
    this.props.apiPost('/api/skatespot/comment', commentObj)
    .done((data) => {
      this.getSkateSpots();
    });
  }

  clickNav(modeNum, spot) {
    console.log(modeNum);
    //renders the proper component to the sidePanel
    if (spot && modeNum === 4) {
      this.setState({
        mode: modeNum,
        currentSpot: spot,
        center: {lat: spot.lat, lng: spot.lng + 0.04},
        zoom: 13,
        infoPanel: true,
        sidePanel: false
      });
    } else if (modeNum === 0) {
      this.setState({
        mode: modeNum,
        currentSpot: undefined,
        center: {lat: 37.75, lng: -122.44},
        zoom: 13,
        infoPanel: false,
        sidePanel: false
      });
    } else {
      this.setState({
        mode: modeNum,
        currentSpot: undefined,
        infoPanel: false,
        sidePanel: true
      });
    }
  }

  render() {
    // our map and sideBar component goes into the div below adjacent to the h1
    var sidePanel;
    var ourMap;
    var mapStyle = {height: screen.height - (0.15*screen.height)};

    //render the map in all cases
    var googleMap = <div className='map-wrapper' style={mapStyle}>
                      <OurMap center={this.state.center} zoom={this.state.zoom} skateSpotsData={this.state.skateSpots}
                      currentSpot={this.state.currentSpot} changeCurrentSpot={this.changeCurrentSpot.bind(this)} user={this.state.user} userLocation={this.state.userLocation} />
                    </div>
    //depending on the state property, render one of the panels
    if (this.state.sidePanel || this.state.infoPanel) {
      ourMap = <div className='col-xs-8 wrapper'>
                {googleMap}
               </div>;

      sidePanel = <div className='col-xs-4 side-wrapper'>
                    <SidePanel signin={this.signin.bind(this)} signup={this.signup.bind(this)} mode={this.state.mode} userLocation={this.state.userLocation} user={this.state.user.username} skateSpots={this.state.skateSpots} getSkateSpots={this.getSkateSpots.bind(this)} currentSpot={this.state.currentSpot} userObj={this.state.user} userLocation={this.state.userLocation} checkIn={this.checkIn.bind(this)}  postComment={this.postComment.bind(this)}/>
                  </div>
    } else {
        ourMap = <div className='col-xs-12 wrapper'>
                  {googleMap}
                 </div>;
    }
    
    return (
      <div>
        <Nav clickNav={this.clickNav.bind(this)} user={this.state.user.username} signout={this.signout.bind(this)}/>
        {ourMap}
        {sidePanel}
      </div>
    );
  }
}
