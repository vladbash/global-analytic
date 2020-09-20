const axios = require('axios');
const config = require('./config');
const ua = require('universal-analytics');

const track = async (category, action, label, value) => {
    const visitor = ua(config.analyticKey);
    const result = await new Promise((res, rej) => visitor.event(category, action, label, value).send((err, result) => {
        if (err) {
            rej(err);
        }
        res(result);
    }));
    return result;
};

module.exports = {
    track
};