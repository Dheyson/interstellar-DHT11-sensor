import React, { useState, useEffect } from 'react';
import axios from 'axios';

import * as S from './styles';

import SmallData from './SmallData';

import { getCurrentStatus, getData, getFieldById, getPublicChannels } from '../../api';

const RealTimeData = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		async function fetchData() {
			await axios.get(`https://api.thingspeak.com/channels/1064896/fields/1.json`)
				.then(res => {
					const values = res.data.feeds;
					setData({ values });
				})
		}
		fetchData();
	}, []);

	function handleData() {
		console.log(data);
	}

	return (
		<S.Container>
			<S.Title>
				Real time data
			</S.Title>
			<S.DataContainer>
				<SmallData fieldText="" value="" />
				<SmallData fieldText="test1" value="23" />
			</S.DataContainer>
			<S.DataContainer>
				<SmallData fieldText="test1" value="23" />
				<SmallData fieldText="test1" value="23" />
			</S.DataContainer>
			<button onClick={handleData}>ok</button>
		</S.Container>
	);
}

export default RealTimeData;
