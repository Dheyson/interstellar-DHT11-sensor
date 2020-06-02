require('dotenv').config();

const axios = require('axios').default;

const ID = 1064896;

const instance = axios.create({
	baseURL: 'https://api.thingspeak.com/',
	timeout: 1000,
	headers: {
		'Access-Control-Allow-Origin':'*',
		'Content-Type': 'application/x-www-form-urlencoded'
	}
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
	return instance.get(`channels/${ID}/${fieldId}.json`)
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

module.exports = { getFieldById, getPublicChannels, getCurrentStatus, getData };
