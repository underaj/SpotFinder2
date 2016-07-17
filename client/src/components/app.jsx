import React from 'react';

const dummyLocation = [];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: dummyLocation
    }
  }

  render() {
    // our map and sideBar component goes into the div below adjacent to the h1
    return (
      <div>
        <h1>Spot Finder</h1>
      </div>
    )
  }
}
