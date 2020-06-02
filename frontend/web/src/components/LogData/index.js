import React from 'react';

import * as S from './styles';


const RealTimeData = () => {
	return (
		<S.Container>
			<S.Title>
				Log data
			</S.Title>
			<S.TablesContainer>
				<S.Iframe src="https://thingspeak.com/channels/1064896/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Temperature%28C%29&type=column"></S.Iframe>
				<S.Iframe src="https://thingspeak.com/channels/1064896/charts/2?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Temperature%28F%29&type=line"></S.Iframe>
			</S.TablesContainer>
			<S.TablesContainer>
				<S.Iframe src="https://thingspeak.com/channels/1064896/charts/3?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Humidity+Status&type=line"></S.Iframe>
				<S.Iframe src="https://thingspeak.com/channels/1064896/charts/4?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Millis+time&type=line"></S.Iframe>
			</S.TablesContainer>
		</S.Container>
	);
}

export default RealTimeData;
