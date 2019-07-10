const Antenna = require('iotex-antenna').default
const { Contract } = require('iotex-antenna/lib/contract/contract')

async function example() {
    const antenna = new Antenna("http://api.testnet.iotex.one:80");

    const sender = antenna.iotx.accounts.privateKeyToAccount("de9aceeb2a4a88ea4405254ec471c2c4a510f7df4b9618ab6aad69535c05320f");
    // contract address: io12g2flcjxuf895rr8eacqlljfp0mrtr88ap7zpq

    const contract = new Contract(
        [{
            "constant": false,
            "inputs": [{ "name": "x", "type": "uint256" }],
            "name": "set",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [],
            "name": "get",
            "outputs": [{ "name": "", "type": "uint256" }],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }],
        "io12g2flcjxuf895rr8eacqlljfp0mrtr88ap7zpq",
        {
            provider: antenna.iotx
        }
    );

    const actionHash = await contract.methods.set(101, {
        account: sender,
        gasLimit: "1000000",
        gasPrice: "1000000000000"
    });
    console.log('actionHash: ', actionHash)

    const getResult = await antenna.iotx.readContractByMethod({
        from: sender.address,
        contractAddress: "io12g2flcjxuf895rr8eacqlljfp0mrtr88ap7zpq",
        abi: [{
            "constant": false,
            "inputs": [{ "name": "x", "type": "uint256" }],
            "name": "set",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }, {
            "constant": true,
            "inputs": [],
            "name": "get",
            "outputs": [{ "name": "", "type": "uint256" }],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }],
        method: "get"
    });
    console.log('getResult: ', getResult)
}

example()