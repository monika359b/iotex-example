const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')

const antenna = require('../lib/antenna')
const logger = require('../lib/logger')

router.use(bodyParser.json())

router.use(function timeLog(req, res, next) {
    logger.info('Request Original Url: ' + req.originalUrl)
    next()
})

router.post('/generateAccount', async function (req, res) {
    const data = antenna.iotx.accounts.create()

    res.json({
        code: 0,
        data
    })
})

router.post('/getAssetsByAccount', async function (req, res) {
    if (!req.body || !req.body.address)
        return res.json({ code: 404, msg: 'missing params' })

    logger.info('Request Body: ', req.body)

    const data = await antenna.iotx.getAccount({address: req.body.address})
    res.json({code: 0, data})
})

module.exports = router