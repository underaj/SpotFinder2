import React from 'react';
import { skateSpotHoverStyle, skateSpotStyle } from './skateSpotStyle.js';
import Tooltip from './tooltip.jsx';

export default class SkateSpot extends React.Component {

  constructor(props) {
    super(props);
  }

  spotOnClick() {
    this.props.changeCurrentSpot(this.props.skateSpotData, true);
  }
  
  render() {
    var style = this.props.$hover ? skateSpotHoverStyle : skateSpotStyle;
    var toolTip = this.props.$hover ? <Tooltip skateSpotData={this.props.skateSpotData} /> : '';

    return (
      <div style={style} onClick={ ()=> { this.spotOnClick() } }>
        {this.props.skateSpotData.icon}
        {toolTip}
      </div>
    );  
  }
}
