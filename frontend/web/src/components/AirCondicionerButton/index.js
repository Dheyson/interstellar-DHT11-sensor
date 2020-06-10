import React, { useState, useEffect } from 'react';

import './radio.css'

import api from '../../api';

const AirCondicionerButton = () => {
	const [value, setValue] = useState("off");
	const [ledValue, setLedValue] = useState(0);

	function handleCheck(e) {
		e.preventDefault();
		if (value === "on") {
			setValue("off");
			setLedValue(0);
			api.postData('https://api.thingspeak.com/update.json');
		} else {
			setValue("on");
			setLedValue(1);
			api.postData('https://api.thingspeak.com/update.json');
		}
	}

	useEffect(() => {
		console.log(ledValue);
	}, []);

	return (
		<div className="container">
			<div className="switch">
				<input type="radio" className="switch-input" name="view" value={value} id="on" onClick={() => handleCheck} />
				<label for="on" className="switch-label switch-label-off">ON</label>
				<input type="radio" className="switch-input" name="view" value={value} id="off" checked />
				<label for="off" className="switch-label switch-label-on">OFF</label>
				<span className="switch-selection"></span>
			</div>
		</div>
	);
}

export default AirCondicionerButton;
