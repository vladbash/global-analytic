const Koa = require("koa");
const cors = require('@koa/cors');
const bodyParser = require('koa-bodyparser');
const Router = require('@koa/router');
const R = require('ramda');
const config = require("./utils/config");
const proxy = require("./utils/proxy");

const router = new Router();

router.post("/track", async ctx => {
    const {
        category,
        action,
        label,
        value
    } = R.pathOr({})(['request', 'body'])(ctx);
    ctx.body = proxy.track(category, action, label, value);
});

const init = () => {
    const app = new Koa();

    app.use(bodyParser());
    app.use(cors());
    app.use(router.routes());

    app.listen(config.ports.http, () => console.log(`Running on :${config.ports.http}`));
};

module.exports = {
    init
};