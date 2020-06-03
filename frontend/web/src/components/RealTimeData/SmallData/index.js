import React from 'react';

import * as S from './styles';

const SmallData = ({ fieldText, value, align }) => {

	return (
		<S.DataInfo>
			<S.DataTitle align={align}>
				{fieldText}
			</S.DataTitle>
			<S.Data align={align}>
				{value}
			</S.Data>
		</S.DataInfo>
	);
}

export default SmallData;
