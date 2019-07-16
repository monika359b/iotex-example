const Antenna = require('iotex-antenna').default
const {toRau} = require('iotex-antenna/lib/account/utils')

async function example() {
    const antenna = new Antenna("http://api.testnet.iotex.one:80");

    const bytecode = '608060405234801561001057600080fd5b5060bf8061001f6000396000f30060806040526004361060485763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166360fe47b18114604d5780636d4ce63c146064575b600080fd5b348015605857600080fd5b5060626004356088565b005b348015606f57600080fd5b506076608d565b60408051918252519081900360200190f35b600055565b600054905600a165627a7a72305820c784e1160506022eb538f734445a5e7cca2d365d0013507830c7e21c10e013530029'
    const abi = [{"constant":false,"inputs":[{"name":"x","type":"uint256"}],"name":"set","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"get","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}];

    const creator = antenna.iotx.accounts.privateKeyToAccount(
        "de9aceeb2a4a88ea4405254ec471c2c4a510f7df4b9618ab6aad69535c05320f"
    );

    const actionHash = await antenna.iotx.deployContract({
        from: creator.address,
        amount: "0",
        abi: abi,
        data: Buffer.from(bytecode, "hex"),
        gasPrice: toRau("1", "Qev"),
        gasLimit: "100000"
    })
    console.log('actionHash: ', actionHash)
    // actionHash: 455840e69064895ef6abd8da7eccd460d98c333f59a81b4b62b33962ab9f5a20

    // const action1 = await antenna.iotx.getActions({
    //     byHash: {
    //         actionHash, checkingPending: true
    //     }
    // })
    // console.log('action1: ', action1)

    // const action2 = await antenna.iotx.getReceiptByAction({ actionHash })
    // console.log('action2: ', action2)
}

example()



//  if a error happen like Unexpected token o in JSON
//  see:    https://blog.csdn.net/Bambi12/article/details/77850948
