const configs = {
    development: {
        nodeaddress: 'http://api.testnet.iotex.one:80',
        ding_token: '51635280781a35c43b13c3a5f15eb36f5f4bed4c03c7303668ee704dee6b4229'
    },
    production: {
        nodeaddress: 'http://api.iotex.one:80', // nodeaddress: 'http://localhost:14014',
        ding_token: '51635280781a35c43b13c3a5f15eb36f5f4bed4c03c7303668ee704dee6b4229'
    }
}

const config = configs[process.env.NODE_ENV]
module.exports = config