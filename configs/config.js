var path = require("path");

var dotenv = require('dotenv');
dotenv.config();
var env = process.env.NODE_ENV || "development";
console.log(env)
var config = require(path.join(__dirname, '..', 'configs', `${env}.json`));

module.exports = config