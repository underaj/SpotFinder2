import React from 'react';
import { userSpotStyle } from './skateSpotStyle.js';

export default class UserSpot extends React.Component {

  constructor(props) {
    super(props);
  }
  
  render() {

    var style = userSpotStyle;

    return (
      <div style={style}>
        {this.props.user.username}
      </div>
    );  
  }
}
