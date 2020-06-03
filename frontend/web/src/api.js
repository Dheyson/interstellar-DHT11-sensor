require('dotenv').config();

const axios = require('axios').default;

const instance = axios.create({
	baseURL: 'https://api.thingspeak.com/',
	headers: {
		'Access-Control-Allow-Origin':'*',
		'Content-Type': 'application/json'
	}
});

function getPublicChannels(userId) {
	return instance.get(`users/${userId}/channels.json`);
}

function getFieldById(channelId, fieldId) {
	return instance.get(`channels/${channelId}/${fieldId}.json`);
}

function getCurrentStatus(channelId) {
	return instance.get(`channels/${channelId}/status.json`);
}

function getData(channelId) {
	return instance.get(`channels/${channelId}/feeds.json`);
}

module.exports = { getFieldById, getPublicChannels, getCurrentStatus, getData };
