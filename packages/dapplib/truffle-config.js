require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea kiwi bottom trip fan response range proof harvest clog army gaze'; 
let testAccounts = [
"0x0089257c0f4129d77ba4ba96f9fa07ada7b7b211bbb570f9969234f5bac876c0",
"0xf45f812db10a4f5a2a866fde0ed8348e5a71ee073af2109a28f261047cdecd88",
"0x29f37f76786284564a4034e7518b5cef923330ecb6ffa5f45e52f6daebaa359e",
"0xf08574d3bfad0c75f01c5af87a483efc2e991fbaaa20a25f604a8032aa9e7769",
"0x96ebbda96ede5100672817bc56ead6a7e4bb346eee9de5462e7c3581b8f54fc5",
"0xf32807264644745fc1e7bf0b5206636e4d9e24fe5f9672a06258fc1d0492bc50",
"0x288a7bfba441573c21bd84fb34023d471971068b66574984a43070c5ac846172",
"0x46bd42a16d4acd8efb4c882207fec2b0f3cfcb60932c89d9642d4b9274f73830",
"0xbc89384a01cd9d63b0eda2180a1d20934df1e5aced01ca7c51064adc3de5f345",
"0xa28a8e093c4cb60e4e726c6ef54cace3eb0faaf3e9b7b277a7c1c793bf83b02d"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
