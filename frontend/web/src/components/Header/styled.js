import styled from 'styled-components';

export const HeadContainer = styled.header`
	display: flex;
	justify-content: space-around;
	background-color: #0004;
	align-items: center;
	height: 100px;
	box-sizing: border-box;
	box-shadow: 0px 10px 1px rgba(90, 227, 255, 0.5);
`;

export const Title = styled.h2`
	font-family: Poppins;
	font-style: normal;
	font-weight: bold;
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
	font-weight: bold;
	font-size: 12px;
	line-height: 18px;
	color: #ffff;
	padding-right: 20px;
	padding-left: 20px;
	text-transform: uppercase;

@media (min-width: 1440px) {
    font-size: 16px;
		line-height: 24px;
  }
`;

export const SpanInfo = styled.span`
	font-family: Poppins;
	font-style: normal;
	font-weight: bold;
	font-size: 16px;
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
