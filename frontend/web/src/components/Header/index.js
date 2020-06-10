import React from 'react';

import * as S from './styled';

import AirCondicionerButton from '../AirCondicionerButton'

const Header = () => {
	return (
		<S.HeadContainer>

			<S.infoWrapper>
				<S.Wrapper>
					<S.Subtitle>
						Air-condicioner:
				</S.Subtitle>
					<AirCondicionerButton />
				</S.Wrapper>
			</S.infoWrapper>
		</S.HeadContainer>
	);
}

export default Header;
