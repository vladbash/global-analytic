const grpc = require('grpc');
const analyticProto = require('../proto/analytic.proto');
const config = require("./utils/config");

const init = () => {
    const server = new grpc.Server();
    server.addService(analyticProto.analytic.AnalyticService.service, {});

    server.bind(config.ports.grpc, grpc.ServerCredentials.createInsecure());
    server.start();
};

module.exports = {
    init
};