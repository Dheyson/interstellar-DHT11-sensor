import React from 'react';

import * as S from './styles';

import SmallData from './SmallData';

const RealTimeData = () => {
	return (
		<S.Container>
			<S.Title>
				Real time data
			</S.Title>
			<S.DataContainer>
			<SmallData/>
			<SmallData/>
			</S.DataContainer>
			<S.DataContainer>
				<SmallData />
				<SmallData />
			</S.DataContainer>
		</S.Container>
	);
}

export default RealTimeData;
