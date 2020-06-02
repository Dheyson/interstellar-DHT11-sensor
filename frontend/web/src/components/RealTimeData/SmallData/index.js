import React, {useState, useEffect} from 'react';

import * as S from './styles';
import { getCurrentStatus, getData, getFieldById, getPublicChannels } from '../../../api';

const SmallData = () => {
	const [state, setState] = useState('');

	useEffect(() => {
		const { data } = getFieldById(1);
		return setState(data);
	});

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
