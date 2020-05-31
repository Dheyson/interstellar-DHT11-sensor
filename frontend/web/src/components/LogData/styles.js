import styled from 'styled-components';


export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;

		@media (min-width: 1440px) {
		flex-direction: column;
		justify-content: space-between;
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

export const Table = styled.table`
	background: #D7D9CE;
	border: 2px solid #5AE3FF;
	box-sizing: border-box;
	box-shadow: 0px 10px 1px rgba(90, 227, 255, 0.5);
	padding: 20px;
	margin: 20px;
`;
