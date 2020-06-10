import React, { useState, useEffect } from 'react';

import './radio.css'

import api from '../../api';

const AirCondicionerButton = () => {
	const [value, setValue] = useState("off");
	const [ledValue, setLedValue] = useState(0);

	async function handleCheck(e) {
		e.preventDefault();
		if (value === "on") {
			setValue("off");
			setLedValue(0);
			await api.postData(`https://api.thingspeak.com/update.json?api_key=M2B1M9211M8THGMG&field8="123"`);
		} else {
			setValue("on");
			setLedValue(1);
			await api.postData(`https://api.thingspeak.com/update.json?api_key=M2B1M9211M8THGMG&field8=${ledValue}`);
		}
	}

	useEffect(() => {
		// Call the data when load the component
		api.postData(`https://api.thingspeak.com/update.json?api_key=M2B1M9211M8THGMG&field8="123"`);
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
