/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require('@nomiclabs/hardhat-ethers');
require('hardhat-deploy');
require('dotenv').config();

/* Create .env file with PROJECT ID from your project in Infura and a private key from your MetaMask account. Code:
   INFURA_API_KEY='<PROJECT ID>'
   PRIVATE_KEYS='<private key from MetaMask>'
*/

const { INFURA_API_KEY, PRIVATE_KEYS, NETWORK_URL, PRIVATE_KEYS_EVMOS, NETWORK_URL_TESTNET, PRIVATE_KEYS_TESTNET, 
   ETHERSCAN_API_KEY } = process.env;
const accounts = PRIVATE_KEYS_TESTNET.split(", ");

module.exports = {
   defaultNetwork: 'hardhat',

   networks: {
      hardhat: {},

      ropsten: {
         url: `https://ropsten.infura.io/v3/${INFURA_API_KEY}`,
         accounts: [PRIVATE_KEYS],
         chainId: 3
      },
      rinkeby: {
         url: `https://rinkeby.infura.io/v3/${INFURA_API_KEY}`,
         accounts: [PRIVATE_KEYS],
         chainId: 4
      },
      evmos: {
         url: NETWORK_URL,
         accounts: [PRIVATE_KEYS_EVMOS],
         chainId: 9000
      },
      testnet: {
         url: NETWORK_URL_TESTNET,
         accounts: accounts,
         chainId: 9000
      },
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
      ],
   },
   paths: {
      sources: './contracts',
      cache: './cache',
      artifacts: './artifacts',
   },
   mocha: {
      timeout: 20000,
   },
};
