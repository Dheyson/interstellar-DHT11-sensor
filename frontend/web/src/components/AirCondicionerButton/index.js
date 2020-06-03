import React from 'react';

import './radio.css'

const AirCondicionerButton = () => {
	return (
		<div className="container">
			<div className="switch">
				<input type="radio" className="switch-input" name="view" value="week" id="week" checked />
				<label for="week" className="switch-label switch-label-off">ON</label>
				<input type="radio" className="switch-input" name="view" value="month" id="month" />
					<label for="month" className="switch-label switch-label-on">OFF</label>
					<span className="switch-selection"></span>
			</div>
		</div>
	);
}

export default AirCondicionerButton;
