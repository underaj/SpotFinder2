import React from 'react';
import ReactDOM from 'react-dom';

export default class Tooltip extends React.Component {
  constructor(props) {
    super(props);
  }

	render () {
		return (
			<div className='tooltip-wrapper' >
        {this.props.skateSpotData.shortDescription}
        <div className='tooltip bottom' role='tooltip'>
        </div>
			</div>
		);
	}
};
