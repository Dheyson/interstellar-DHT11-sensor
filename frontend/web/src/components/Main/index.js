import React, { useState, useEffect } from 'react';
import axios from 'axios';

import * as S from './styles';
import RealTime from '../RealTimeData';
import LogData from '../LogData';

const Main = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		async function fetchData() {
			await axios.get(`https://api.thingspeak.com/channels/1064896/fields/1.json`)
				.then(res => {
					const values = res.data.channel;
					setData(values);
				})
		}
		fetchData();
	}, []);

	return (
		<S.MainContainer>
			<S.Title>
				{data.name}
			</S.Title>
			<S.WrapperData>
				<RealTime />
				<LogData />
			</S.WrapperData>
		</S.MainContainer>
	);
}

export default Main;
