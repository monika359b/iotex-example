const Antenna = require('iotex-antenna').default
const {toRau} = require('iotex-antenna/lib/account/utils')

async function example() {
    const antenna = new Antenna("http://api.testnet.iotex.one:80");

    // create a new wallet which contains a public key, a private key, and an address.
    const wallet = antenna.iotx.accounts.create();
    console.log(wallet)
  
    // recover the whole wallet from a single private key
    const unlockedWallet = antenna.iotx.accounts.privateKeyToAccount("69805ee813eadffa8fae53d0e6063e5fbf6a6e0fb9e90f6eaad7bc67f3d6c4bd");
    console.log(unlockedWallet)

    const account = await antenna.iotx.getAccount({address: "io1cl6rl2ev5dfa988qmgzg2x4hfazmp9vn2g66ng"});
    console.log(account)
    const chainMeta = await antenna.iotx.getChainMeta();
    console.log(chainMeta)
    const actions = await antenna.iotx.getActions({byIndex: {start: 1, count: 5}});
    console.log(actions)
    const blocks = await antenna.iotx.getBlockMetas({byIndex: {start: 1, count: 5}});
    console.log(blocks)
}

example()