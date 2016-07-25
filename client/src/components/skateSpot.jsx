import React from 'react';
import { skateSpotHoverStyle, skateSpotStyle , outerDivStyle} from './skateSpotStyle.js';
import Tooltip from './tooltip.jsx';

export default class SkateSpot extends React.Component {

  constructor(props) {
    super(props);
  }

  spotOnClick() {
    this.props.clickNav(4, this.props.skateSpotData);
  }
  
  render() {
    //$hover is a built-in property on child elements of google map wrapper
    var style = this.props.$hover ? skateSpotHoverStyle : skateSpotStyle;
    var toolTip = this.props.$hover ? <Tooltip skateSpotData={this.props.skateSpotData} /> : '';

    return (
      <div style={outerDivStyle}>
        <div style={style} onClick={ ()=> { this.spotOnClick() } }>
        </div>
        {toolTip}
      </div>
    );  
  }
}
