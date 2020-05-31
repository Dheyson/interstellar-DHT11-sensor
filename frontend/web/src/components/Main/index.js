import React from 'react';

import * as S from './styles';
import RealTime from '../RealTimeData';

const Main = () => {
	return (
		<S.MainContainer>
			<S.Title>
				Interstellar temperature <br/>and humidity detector
			</S.Title>
			<S.WrapperData>
				<RealTime/>
				<RealTime/>
			</S.WrapperData>
		</S.MainContainer>
	);
}

export default Main;
