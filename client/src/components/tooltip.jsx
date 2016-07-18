import React from 'react';
import ReactDOM from 'react-dom';

export default class Tooltip extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      opacity: false
    };
    this.toggle = this.toggle.bind(this);
  }

	toggle () {
		var tooltipNode = ReactDOM.findDOMNode(this);
		this.setState({
			opacity: !this.state.opacity,
			top: tooltipNode.offsetTop,
			left: tooltipNode.offsetLeft
		});
	},
	render () {
		var style = {
			zIndex: (this.state.opacity) ? 1000 : -1000,
      opacity: +this.state.opacity,
			top: (this.state.top || 0) + 20,
			left: (this.state.left || 0) - 30
		}
		return (
			<div style={{display: 'inline'}}>
			<div onClick={this.toggle}>
			</div>
			<div className='tooltip bottom' style={style} role='tooltip'>
			<div className='tooltip-arrow'></div>
			<div className='tooltip-inner'>
			{this.props.skateSpotData.shortDescription}
			</div>
			</div>
			</div>
			)
	}
};
