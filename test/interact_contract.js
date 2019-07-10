const Antenna = require('iotex-antenna').default
const { Contract } = require('iotex-antenna/lib/contract/contract')

async function example() {
    const antenna = new Antenna("http://api.testnet.iotex.one:80");

    const sender = antenna.iotx.accounts.privateKeyToAccount("73c7b4a62bf165dccf8ebdea8278db811efd5b8638e2ed9683d2d94889450426");

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
        "io186s45j3rgvhxh25ec6xk9wap0drtthk3jq4du7",
        {
            provider: antenna.iotx
        }
    );

    const actionHash = await contract.methods.set(101, {
        account: sender,
        gasLimit: "1000000",
        gasPrice: "1000000000000"
    });

    const getResult = await antenna.iotx.readContractByMethod({
        from: sender.address,
        contractAddress: "io186s45j3rgvhxh25ec6xk9wap0drtthk3jq4du7",
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
}

example()