import React from 'react';

import * as S from './styles';

const SmallData = ({ fieldText, value }) => {

	return (
		<S.DataInfo>
			<S.DataTitle>
				{fieldText}
			</S.DataTitle>
			<S.Data>
				{value}
			</S.Data>
		</S.DataInfo>
	);
}

export default SmallData;
