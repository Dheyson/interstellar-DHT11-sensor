import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './radio.css'

import api from '../../api';

const AirCondicionerButton = () => {
	const [value, setValue] = useState();
	const [ledValue, setLedValue] = useState(0);

	async function handleCheck(e) {
		e.preventDefault();
		console.log('0');
		if (value === "on") {
			console.log('1');
			await axios.post('https://api.thingspeak.com/update.json', {
				api_key: 'M2B1M9211M8THGMG',
				field8: 0,
			})
			.then( res => {
				setValue("off");
				setLedValue(0);
				console.log(res.data)
			})
			.catch(err => {
				console.log(err)
				setValue("on");
				setLedValue(1);
			})
		} else {
			console.log('2');
			await axios.post('https://api.thingspeak.com/update.json', {
				api_key: 'M2B1M9211M8THGMG',
				field8: 1,
			})
			.then( res => {
				setValue("on");
				setLedValue(1);
				console.log(res.data)
			})
			.catch(err => {
				console.log(err)
				setValue("off");
				setLedValue(0);
			})
		}
		
	}

	useEffect( () => {
		async function fetch() {
			await axios.get(`https://api.thingspeak.com/channels/1064896/fields/8/last.json`)
			.then( res => {
				console.log(res.data)
			})
			.catch(err => console.log(err))
		}
		fetch();
	}, []);

	return (
		<div className="container">
			<div className="switch">
				<input type="radio" className="switch-input" name="view" value={value} id="on" onChange={() => handleCheck} />
				<label htmlFor="on" className="switch-label switch-label-off">ON</label>
				<input type="radio" className="switch-input" name="view" value={value} id="off" checked />
				<label htmlFor="off" className="switch-label switch-label-on">OFF</label>
				<span className="switch-selection"></span>
			</div>
		</div>
	);
}

export default AirCondicionerButton;
