const Koa = require("koa");
const cors = require('@koa/cors');
const bodyParser = require('koa-bodyparser');
const config = require("./config");
const router = require("./proxy")

const app = new Koa();

app.use(bodyParser());
app.use(cors());
app.use(router.routes());

app.listen(config.port, () => console.log(`Running on :${port}`));