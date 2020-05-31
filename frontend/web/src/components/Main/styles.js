import styled from 'styled-components';

export const MainContainer = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;

export const Title = styled.h1`
	font-family: Poppins;
	font-style: normal;
	font-weight: normal;
	font-size: 36px;
	line-height: 54px;
	color: #5AE3FF;

	@media (min-width: 1440px) {
    font-size: 58px;
		line-height: 87px;
  }
`;

export const WrapperData = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	@media (min-width: 1440px) {
    flex-direction: row;
	}
`
