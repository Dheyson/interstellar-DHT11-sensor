import React from 'react';

import * as S from './styles';

const index = () => {
	return (
			<S.DataInfo>
				<S.DataTitle>
					Current environment temperature(C):
				</S.DataTitle>
				<S.Data>
					24 C
				</S.Data>
			</S.DataInfo>
	);
}

export default index;
