const Antenna = require('iotex-antenna').default
const {toRau} = require('iotex-antenna/lib/account/utils')

async function example() {
    const antenna = new Antenna("http://api.testnet.iotex.one:80");

    
    // const actions = await antenna.iotx.getActions({ byBlk: { 
    //     blkHash: '6d01aa3ce6dc6a9f88357444e4472b12cb61e14acf11e3138c0047319e96dac2', start: 0, count: 10 
    // } })
    // console.log(actions)


    const actions = await antenna.iotx.getActions({ byHash: {
        actionHash: '3fc0c256dd8a9f58af324b15239378eaadd3c87db0c2db7a81ded7ba9fe16fb6', checkingPending: true
    } })
    console.log(actions)
    
    // const bytecode = "608060405234801561001057600080fd5b5060df8061001f6000396000f3006080604052600436106049576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806360fe47b114604e5780636d4ce63c146078575b600080fd5b348015605957600080fd5b5060766004803603810190808035906020019092919050505060a0565b005b348015608357600080fd5b50608a60aa565b6040518082815260200191505060405180910390f35b8060008190555050565b600080549050905600a165627a7a7230582043be766a6a271867521090c3e12130ea8891a8f59d4833bc205a3e2e2c70b4730029";

    // const abi = [{ "constant": false, "inputs": [{ "name": "x", "type": "uint256" }], "name": "set", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "get", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "inputs": [{ "name": "_x", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }];

    // const creator = antenna.iotx.accounts.privateKeyToAccount(
    //     "73c7b4a62bf165dccf8ebdea8278db811efd5b8638e2ed9683d2d94889450426"
    // );

    // const actionHash = await antenna.iotx.deployContract({
    //     from: creator.address,
    //     amount: "0",
    //     abi: abi,
    //     data: Buffer.from(bytecode, "hex"),
    //     gasPrice: toRau("1", "Qev"),
    //     gasLimit: "100000"
    // });

    // console.log(actionHash)
}

example()