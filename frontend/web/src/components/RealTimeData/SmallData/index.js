import React, {useState, useEffect} from 'react';
import axios from 'axios';

import * as S from './styles';
import { getCurrentStatus, getData, getFieldById, getPublicChannels } from '../../../api';

const SmallData = () => {
	const [state, setState] = useState('');

	useEffect( () => {
		async function value() {
			const response =  await axios.get(`https://api.thingspeak.com/channels/1064896/fields/1.json`)
			.then((res, req) => {
					console.log(res, response.data);
			})
			.catch(error => {
				console.log('Something went wrong', error);
			})
		}
		value();
	}, []);



	return (
			<S.DataInfo>
				<S.DataTitle>
					Current environment temperature(C):
				</S.DataTitle>
				<S.Data>
					{state}
				</S.Data>
			</S.DataInfo>
	);
}

export default SmallData;
