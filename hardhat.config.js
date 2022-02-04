/**
 * @type import('hardhat/config').HardhatUserConfig
 */

 require('dotenv').config({
   path: process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : '.env'
})

require('@nomiclabs/hardhat-etherscan')
require('@nomiclabs/hardhat-waffle')
// require('hardhat-abi-exporter')
// require('hardhat-gas-reporter')

/* Create .env file with PROJECT ID from your project in Infura and a private key from your MetaMask account. Code:
   INFURA_API_KEY='<PROJECT ID>'
   PRIVATE_KEYS='<private key from MetaMask>'
*/

const {INFURA_API_KEY, ACCOUNT_KEYS, RINKEBY_KEYS, ROPSTEN_KEYS, LOCAL_NETWORK_URL, DEFAULT_NETWORK, POLIGON_LOCAL_KEYS,
   POLIGON_TESTNET_KEYS, POLYGON_LOCAL_URL, EVMOS_TESTNET_URL, POLYGON_TESTNET_URL} = process.env

const accounts = ACCOUNT_KEYS ? ACCOUNT_KEYS.split(', ') : []
const accountsRinkeby = RINKEBY_KEYS ? RINKEBY_KEYS.split(', ') : []
const accountsRopsten = ROPSTEN_KEYS ? ROPSTEN_KEYS.split(', ') : []
const accountsPoligonLocalhost = POLIGON_LOCAL_KEYS ? POLIGON_LOCAL_KEYS.split(', ') : []
const accountsPoligonTestnet = POLIGON_TESTNET_KEYS ? POLIGON_TESTNET_KEYS.split(', ') : []

module.exports = {
   defaultNetwork: DEFAULT_NETWORK || 'hardhat',
   networks: {
      hardhat: {
         initialBaseFeePerGas: 0 // workaround from https://github.com/sc-forks/solidity-coverage/issues/652#issuecomment-896330136 . Remove when that issue is closed.
      },
      localnet: {
         url: LOCAL_NETWORK_URL || '',
         accounts: accounts,
         gas: 2100000,
         gasPrice: 8000000000,
         timeout: 60000
      },
      testnet: {
         url: EVMOS_TESTNET_URL,
         // accounts: accounts,
         accounts: accountsPoligonTestnet,
         gas: 2100000,
         gasPrice: 8000000000,
         timeout: 60000
      },
      poligontestnet: {
         url: POLYGON_TESTNET_URL,
         accounts: accountsPoligonTestnet,
         chainId: 100,
         timeout: 60000
      },
      poligonlocal: {
         url: POLYGON_LOCAL_URL,
         accounts: accountsPoligonLocalhost,
         chainId: 150,
         timeout: 60000
      },
      rinkeby: {
         url: `https://rinkeby.infura.io/v3/${INFURA_API_KEY}`,
         chainId: 4,
         accounts: accountsRinkeby || accounts
      },
      ropsten: {
         url: `https://ropsten.infura.io/v3/${INFURA_API_KEY}`,
         chainId: 4,
         accounts: accountsRopsten || accounts
      }
   },
   solidity: {
      compilers: [
         {
            version: '0.5.16',
            settings: {
               optimizer: {
                  enabled: true,
                  runs: 200,
               },
            },
         },
         {
            version: '0.6.6',
            settings: {
               optimizer: {
                  enabled: true,
                  runs: 200,
               },
            },
         },
         {
            version: '0.8.0',
            settings: {
               optimizer: {
                  enabled: true,
                  runs: 200,
               },
            },
         },
      ]
   }
}
