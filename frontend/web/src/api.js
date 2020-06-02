require('dotenv').config();

const axios = require('axios').default;

const instance = axios.create({
	baseURL: 'https://api.thingspeak.com/',
	timeout: 1000,
	headers: { 'X-Custom-Header': 'foobar' }
});

function getPublicChannels() {
	return instance.get(`users/${process.env.USER_ID}/channels.json`)
		.then(function (response) {
			console.log(response);
		})
		.catch(function (error) {
			console.log(error);
		})
}

function getFieldById(fieldId) {
	return instance.get(`channels/${process.env.CHANNEL_ID}/${fieldId}.json`)
		.then(function (response) {
			console.log(response);
		})
		.catch(function (error) {
			console.log(error);
		})
}

function getCurrentStatus() {
	return instance.get(`channels/${process.env.CHANNEL_ID}/status.json`)
		.then(function (response) {
			console.log(response);
		})
		.catch(function (error) {
			console.log(error);
		})
}

function getData() {
	return instance.get(`channels/${process.env.CHANNEL_ID}/feeds.json`)
		.then(function (response) {
			console.log(response);
		})
		.catch(function (error) {
			console.log(error);
		})
}

axios.all([getPublicChannels(), getFieldById(), getCurrentStatus(), getData()])
	.then(axios.spread(function (acct, perms) {
		// Both requests are now complete
	}));

module.exports = { getFieldById, getPublicChannels, getCurrentStatus, getData };
