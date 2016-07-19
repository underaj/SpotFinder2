import React from 'react';
import ReactDOM from 'react-dom';

export default class Tooltip extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      opacity: false
    };
    // this.toggle = this.toggle.bind(this);
  }

	// toggle () {
	// 	
	// 	this.setState({
	// 		opacity: !this.state.opacity,
	// 		top: tooltipNode.offsetTop,
	// 		left: tooltipNode.offsetLeft
	// 	});
 //    console.log(this.state.opacity);
	// }

	render () {
		var style = {
			zIndex: 1000,
      // opacity: +this.state.opacity,
			// top: (this.state.top || 0) + 20,
			// left: (this.state.left || 0) - 30
		}
		return (
			<div style={style}>
        {this.props.skateSpotData}
        <div className='tooltip bottom' style={style} role='tooltip'>
          <div className='tooltip-arrow'></div>
          <div className='tooltip-inner'></div>
        </div>
			</div>
		);
	}
};
