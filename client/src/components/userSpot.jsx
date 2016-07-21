import React from 'react';
import { skateSpotHoverStyle, skateSpotStyle } from './skateSpotStyle.js';

export default class UserSpot extends React.Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    var style = this.props.$hover ? skateSpotHoverStyle : skateSpotStyle;

    return (
      <div style={style}>
        {this.props.user.username}
      </div>
    );  
  }
}
