import styled from 'styled-components';

export const HeadContainer = styled.header`
	display: flex;
	justify-content: space-around;
	background-color: #C4C4C4;
	align-items: center;
`;

export const Title = styled.h2`
	font-family: Poppins;
	font-style: normal;
	font-weight: normal;
	font-size: 24px;
	line-height: 36px;
	color: #04052E;

@media (min-width: 1440px) {
    font-size: 32px;
		line-height: 48px;
  }
`;

export const Subtitle = styled.h2`
	font-family: Poppins;
	font-style: normal;
	font-weight: normal;
	font-size: 12px;
	line-height: 18px;
	color: #04052E;
	padding-right: 20px;
	padding-left: 20px;

@media (min-width: 1440px) {
    font-size: 16px;
		line-height: 24px;
  }
`;

export const SpanInfo = styled.span`
	font-family: Poppins;
	font-style: normal;
	font-weight: normal;
	font-size: 12px;
	line-height: 18px;
	/* identical to box height */
	color: #00FF19;

@media (min-width: 1440px) {
    font-size: 32px;
		line-height: 48px;
  }

`;

export const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const infoWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;

	@media (min-width: 1440px) {
    flex-direction: row;
		justify-content: space-between;
  }
`;
