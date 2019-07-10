const express = require('express')
const router = express.Router()
const {toRau} = require('iotex-antenna/lib/account/utils')

const antenna = require('../lib/antenna')
const logger = require('../lib/logger')

router.post('/assetsTransfer', async function (req, res) {
    if (!req.body || !req.body.key || !req.body.to || !req.body.value) 
        return res.json({ code: 404, msg: 'missing params' })

    logger.info('Request Body: ', req.body)

    const sendAccount = await antenna.iotx.accounts.privateKeyToAccount(req.body.key)
    const data = await antenna.iotx.sendTransfer({
        from: sendAccount.address,
        to: req.body.to,
        value: toRau(req.body.value, "iotx"),
        gasLimit: "100000",
        fasPrice: toRau(req.body.value, "Qev")
    })
    res.json({code: 0, data})
})

router.post('/getBlockByHash', async function (req, res) {
    if (!req.body || !req.body.hash) 
        return res.json({ code: 404, msg: 'missing params' })

    logger.info('Request Body: ', req.body)

    const data = await antenna.iotx.getActions({ byHash: { 
        actionHash:  req.body.hash, checkingPending: true 
    }})
    res.json({code: 0, data})
})

module.exports = router