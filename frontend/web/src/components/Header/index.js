import React from 'react';

import * as S from './styled';

import RadioButton from '../AirCondicionerButton'

const Header = () => {
	return (
		<S.HeadContainer>

			<S.infoWrapper>
				<S.Wrapper>
					<S.Subtitle>
						Air-condicioner:
				</S.Subtitle>
					<RadioButton />
				</S.Wrapper>
			</S.infoWrapper>
		</S.HeadContainer>
	);
}

export default Header;
