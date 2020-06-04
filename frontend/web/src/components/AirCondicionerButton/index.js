import React, { useState } from 'react';

import './radio.css'

const AirCondicionerButton = () => {
	const [check, setCheck] = useState(true);

	function handleCheck(e) {
		e.preventDefault();
		setCheck(!check)
	}

	return (
		<div className="container">
			<div className="switch">
				<input type="radio" className="switch-input" name="view" value="on" id="on"  />
				<label for="on" className="switch-label switch-label-off">ON</label>
				<input type="radio" className="switch-input" name="view" value="off" id="off" checked/>
				<label for="off" className="switch-label switch-label-on">OFF</label>
				<span className="switch-selection"></span>
			</div>
		</div>
	);
}

export default AirCondicionerButton;
