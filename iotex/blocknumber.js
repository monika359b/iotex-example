const express = require('express')
const router = express.Router()

const antenna = require('../lib/antenna')
const logger = require('../lib/logger')

router.post('/getBlocknumber', async (req, res) => {
    const data = await antenna.iotx.getChainMeta()
    
    res.json({code: 0, data })
})

module.exports = router