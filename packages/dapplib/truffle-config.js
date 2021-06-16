require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kitten bone tooth finger deliver remember smile hover kite blue strong'; 
let testAccounts = [
"0x6165fff7a006d043ad09f3bb9faf8447accd5df954e5cefc43b688d096e10555",
"0x852f2eb664fdd2f573e6ae8e583b52dfe05cc1f3a190ab64e182b5979c07ee28",
"0xd608ff3ab94d7cbb2060d4c86a84825df749de0745c424e543efa8fad1b40bb8",
"0x0222d31efec92564425c73e7bbe622c0690e4ef58bc9c43e6bda9cba554b49c6",
"0x17d4b8f6671a6d0d6ffef07483788e0dad7b7a7752bff67f875f94c99d297935",
"0xe4465b15930ecc1e3115a589a60f074f61e3406a44548e550d947bdbfa9d31c6",
"0xdc15467a58bb3b8e3fd48a83bda4bef17fe683ed7d8c52316560caf5a31ff0ec",
"0x429232edd84be00a4b622ab4340eb5a513571218bac378ff6acb51186c855ae6",
"0xb54bc70cfea808879bc9807b6e6e20f970603f327212d78a4e510a9783ab06c7",
"0x86f4cb2eaa4f7a31f7e78b310576ff127c03e8cf26e5e78931d2ba892aa9053c"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

