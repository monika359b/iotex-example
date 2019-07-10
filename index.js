    
const express = require('express')
const account = require('./iotex/account')
const recharge = require('./iotex/recharge')
const withdraw = require('./iotex/withdraw')
const blocknumber = require('./iotex/blocknumber')
const logger = require('./lib/logger')
const app = express()

app.use('/iotex', [account, recharge, withdraw, blocknumber])

app.listen(3060, () => console.log('iotex restful api listening on port 3060'))

process.on('uncaughtException', (err) => {
    if (err) {
        logger.error(err)
    }
})

process.on('unhandledRejection', (err, promise) => {
    if (err) {
        logger.error(err)
    }
})