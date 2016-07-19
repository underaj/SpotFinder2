import React from 'react';
import { skateSpotHoverStyle, skateSpotStyle } from './skateSpotStyle.js';
import Tooltip from './tooltip.jsx';

export default class SkateSpot extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      toolTipVisible: false
    }
  }

  spotOnClick() {
    this.props.changeCurrentSpot(this.props.skateSpotData);
    this.props.bubbleShowOn();
    this.setState({
      toolTipVisible: !this.state.toolTipVisible
    });
  }
  
  render() {
    const style = this.props.$hover ? skateSpotHoverStyle : skateSpotStyle;
    var toolTip;
    if (this.state.toolTipVisible && this.props.bubbleShow) {
      toolTip = <Tooltip skateSpotData={this.props.skateSpotData.shortDescription}/>;
    } else {
      toolTip = '';
    }
    
    return (
      <div style={style} onClick={ ()=> { this.spotOnClick() } }>
        {this.props.skateSpotData.icon}
        {toolTip}
      </div>
    );  
  }
}
