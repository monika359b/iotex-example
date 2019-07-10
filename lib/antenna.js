const Antenna = require('iotex-antenna').default
const config = require('./config')

const antenna = new Antenna(config.nodeaddress)

module.exports = antenna