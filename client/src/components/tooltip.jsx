import React from 'react';
import ReactDOM from 'react-dom';

export default class Tooltip extends React.Component {
  constructor(props) {
    super(props);
  }

	render () {
		var style = {
			zIndex: 1000,
			width: 100
		};

		return (
			<div className='tooltip-wrapper'>
        {this.props.skateSpotData.shortDescription}
        <div className='tooltip bottom' style={style} role='tooltip'>
          <div className='tooltip-arrow'></div>
          <div className='tooltip-inner'></div>
        </div>
			</div>
		);
	}
};
