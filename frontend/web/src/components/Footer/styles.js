import styled from 'styled-components';

export const Container = styled.div`

`;

export const Text = styled.h2`
	font-family: Poppins;
	font-style: normal;
	font-weight: normal;
	font-size: 12px;
	line-height: 18px;
	text-align: center;
	color: #FFFFFF;

	@media (min-width: 1440px) {
    font-size: 16px;
		line-height: 24px;
  }
`;

export const LinkStyle = styled.a`
	font-family: Poppins;
	font-style: normal;
	font-weight: normal;
	color:#5AE3FF;
	&:hover {
		color: #FF9649;
	}
`
