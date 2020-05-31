import React from 'react';

import * as S from './styled';

const Header = () => {
	return (
		<S.HeadContainer>
			<S.Title>
				Status
			</S.Title>
			<S.infoWrapper>
				<S.Wrapper>
					<S.Subtitle>
						Air-condicioner:
				</S.Subtitle>
					<S.SpanInfo>
						ON
			</S.SpanInfo>
				</S.Wrapper>
				<S.Wrapper>
					<S.Subtitle>
						WI-FI CONNECTED:
				</S.Subtitle>
			<S.SpanInfo>
						ON
			</S.SpanInfo>
				</S.Wrapper>
				<S.Wrapper>
					<S.Subtitle>
						THINGS-SPEAK:
				</S.Subtitle>
					<S.SpanInfo>
						ON
			</S.SpanInfo>
				</S.Wrapper>
			</S.infoWrapper>
		</S.HeadContainer>
	);
}

export default Header;
