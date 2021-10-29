/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require('@nomiclabs/hardhat-ethers');
require('hardhat-deploy');
require('dotenv').config();

/* @div create .env file with PROJECT ID and PROJECT SECRET from your project in infura:
   INFURA_API_KEY='<PROJECT ID>'
   PRIVATE_KEYS='<PROJECT SECRET>'
*/

const { INFURA_API_KEY, PRIVATE_KEYS, NETWORK_URL, ETHERSCAN_API_KEY } = process.env;

module.exports = {
   defaultNetwork: 'hardhat',

   networks: {
      hardhat: {},

      ropsten: {
         url: `https://ropsten.infura.io/v3/${INFURA_API_KEY}`,
         accounts: [PRIVATE_KEYS],
         chainId: 4
      },
      rinkeby: {
         url: `https://rinkeby.infura.io/v3/${INFURA_API_KEY}`,
         accounts: [PRIVATE_KEYS],
         chainId: 4
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
