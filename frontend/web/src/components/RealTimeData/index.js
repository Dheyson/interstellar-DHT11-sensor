import React, { Component } from 'react';
import axios from 'axios';

import * as S from './styles';

import SmallData from './SmallData';

export default class RealTimeData extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			channels: {},
			field1: '',
			field2: '',
			field3: '',
			field4: ''
		}
	}

	async componentDidMount() {
		await axios.get(`https://api.thingspeak.com/channels/1064896/fields/1.json`)
			.then(res => {
				this.setState({ channels: res.data.channel, feeds: res.data.feeds[0] })
			})
			.catch(err => {
				console.log(err);
			})

		await axios.get(`https://api.thingspeak.com/channels/1064896/fields/1/last.json`)
			.then(res => {
				this.setState({ field1: res.data.field1 })
			})
			.catch(err => {
				console.log(err);
			})

		await axios.get(`https://api.thingspeak.com/channels/1064896/fields/2/last.json`)
			.then(res => {
				this.setState({ field2: res.data.field2 })
			})
			.catch(err => {
			})

		await axios.get(`https://api.thingspeak.com/channels/1064896/fields/3/last.json`)
			.then(res => {
				this.setState({ field3: res.data.field3 })

			})
			.catch(err => {
				console.log(err);
			})

		await axios.get(`https://api.thingspeak.com/channels/1064896/fields/4/last.json`)
			.then(res => {
				this.setState({ field4: res.data.field4 })
			})
			.catch(err => {
				console.log(err);
			})
	}

	render() {
		const { channels, field1, field2, field3, field4 } = this.state;

		return (
			<S.Container>
				<S.Title>
					Real time data
			</S.Title>
				<S.DataContainer>
					<SmallData fieldText={channels.field1} value={field1 || 'IsEmpty'} />
					<SmallData fieldText={channels.field2} value={field2 || 'IsEmpty'} />
				</S.DataContainer>
				<S.DataContainer>
					<SmallData fieldText={channels.field3} value={field3 || 'IsEmpty'} />
					<SmallData fieldText={channels.field4} value={field4 || 'IsEmpty'} />
				</S.DataContainer>
			</S.Container>
		);
	}

}

