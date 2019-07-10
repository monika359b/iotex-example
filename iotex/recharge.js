
const express = require('express')
const router = express.Router()

const antenna = require('../lib/antenna')
const config = require('../lib/config')
const logger = require('../lib/logger')

router.post('/rechargeList', async function (req, res) {
    if (!req.body || !req.body.blockNumber || !req.body.count) 
        return res.json({ code: 404, msg: 'missing params' })

    logger.info('Request Body: ', req.body)
    
    const blocks = await antenna.iotx.getBlockMetas({byIndex: {start: req.body.blockNumber, count: 1}});
    logger.info("getBlockMetas: ", blocks)
    const actions = await antenna.iotx.getActions({ byBlk: { blkHash: blocks.blkMetas[0].hash, start: 0, count: req.body.count }})
    logger.info("getActions: ", actions)

    res.json({code: 0, data: actions})
})

module.exports = router