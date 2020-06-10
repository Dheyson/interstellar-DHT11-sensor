import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './radio.css'

import api from '../../api';

const AirCondicionerButton = () => {
	const [ledValue, setLedValue] = useState(0);
	const [checked, setChecked] = useState(0);

	const state = {
		on: 1,
		off: 0
	}

	function checkedHandler(e) {
		if (checked === 0) {
			setChecked(1);
		} else {
			setChecked(0);
		}
	}

	async function handleClick(e) {
		e.preventDefault();

		if (checked == 1) {
			await axios.post('https://api.thingspeak.com/update.json', {
				api_key: 'M2B1M9211M8THGMG',
				field8: 1,
			})
				.then(res => {
					setLedValue(1);
					console.log(res.data)
				})
				.catch(err => {
					console.log(err)
				})

		} else {
			await axios.post('https://api.thingspeak.com/update.json', {
				api_key: 'M2B1M9211M8THGMG',
				field8: 0,
			})
				.then(res => {
					setLedValue(0);
					console.log(res.data)
				})
				.catch(err => {
					console.log(err)
				})
		}
	}

	useEffect(() => {
		async function fetch() {
			await axios.get(`https://api.thingspeak.com/channels/1064896/fields/8/last.json`)
				.then(res => {
					console.log('This is data: ', res.data)
				})
				.catch(err => console.log(err))
		}
		fetch();
	}, []);

	return (
		<div className="container">
			<div className="switch">
				<input type="radio" className="switch-input" name="view" checked={checked == 1} value={state.on} id="on" onChange={checkedHandler} onClick={handleClick}/>
				<label htmlFor="on" className="switch-label switch-label-off">ON</label>
				<input type="radio" className="switch-input" name="view" value={state.off} id="off" checked={checked == 0} onChange={checkedHandler} onClick={handleClick}/>
				<label htmlFor="off" className="switch-label switch-label-on">OFF</label>
				<span className="switch-selection"></span>
			</div>
		</div>
	);
}


export default AirCondicionerButton;
