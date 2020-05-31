import styled from 'styled-components';

export const DataInfo = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 20px;

	@media (min-width: 1440px) {
		flex-direction: column;
		align-items: center;
		padding: 40px;
	}
`;

export const DataTitle = styled.h2`
	font-family: Poppins;
	font-style: normal;
	font-weight: normal;
	font-size: 18px;
	line-height: 27px;
	color: #D7D9CE;
	flex: 1.5;

	@media (min-width: 1440px) {
		font-size: 18px;
		line-height: 27px;
		text-align: start;
	}

`;

export const Data = styled.h1`
		font-family: Poppins;
		font-style: normal;
		font-weight: normal;
		font-size: 42px;
		line-height: 63px;
		color: #FF9649;
		flex: 2;

		@media (min-width: 1440px) {
		font-size: 42px;
		text-align: start;
		width: 100%;

	}
`;
