import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;

		@media (min-width: 1440px) {
    flex-direction: column;
	}
`;

export const Title = styled.h1`
	font-family: Poppins;
	font-style: normal;
	font-weight: normal;
	font-size: 20px;
	line-height: 30px;
	color: #D7D9CE;
	border-bottom: 2px solid #D7D9CE;
	text-align: start;
	margin: 20px;

	@media (min-width: 1440px) {
    font-size: 40px;
		line-height: 60px;
	}

`;

export const DataContainer = styled.div`
	display: flex;
	flex-direction: column;

	@media (min-width: 1440px) {
    flex-direction: row;
	}

`


