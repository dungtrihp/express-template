

var log = require('tracer').colorConsole();
var redisConfig = require('../configs/config').redis
log.info(redisConfig)

var redisClient = {
    host: redisConfig.host,
    port: redisConfig.port,
    password: redisConfig.password,
}

if (redisConfig.tls) {
    redisClient.tls = { checkServerIdentity: () => undefined }
}

var redis = require('redis').createClient(redisClient)

module.exports = redis  