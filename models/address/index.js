const axios = require('axios');
const key = require('./key');





const search = (query) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?access_token=${key}`;
    return axios.get(url);
};




module.exports = search;

