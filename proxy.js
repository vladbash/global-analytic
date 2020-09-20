const Router = require('@koa/router');
const R = require('ramda');
const axios = require('axios');
const config = require('./config');

const proxy = new Router();

proxy.post("/track", async ctx => {
    const {
        cid,
        category,
        action,
        label,
        value
    } = R.pathOr({})(['request', 'body'])(ctx);
    const url = `${config.analyticUrl}/collect?v=1&tid=${config.analyticKey}&cid=${cid}&t=event&ec=${category}&ea=${action}&el=${label}&ev=${value}`;
    const response = await axios.default.post(url);
    ctx.body = response.data;
});

module.exports = proxy;