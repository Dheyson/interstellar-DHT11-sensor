import React, { useState } from 'react';

import * as S from './styles';
import RealTime from '../RealTimeData';
import LogData from '../LogData';

const Main = () => {

	return (
		<S.MainContainer>
			<S.Title>
				Interstellar temperature <br />and humidity detector
			</S.Title>
			<S.WrapperData>
				<RealTime />
				<LogData />
			</S.WrapperData>
		</S.MainContainer>
	);
}

export default Main;
