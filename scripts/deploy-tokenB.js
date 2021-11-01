//const hardhat = require('hardhat');
const { ethers } = require('hardhat');

// Deploy function
async function deploy() {
   [account] = await ethers.getSigners();
   deployerAddress = account.address;
   console.log(`Deploying contracts using ${deployerAddress}`);

   // Deploy TokenB_ERC20
   const TokenB = await ethers.getContractFactory('TokenB');
   const tokenBInstance = await TokenB.deploy();
   await tokenBInstance.deployed();
   console.log(`TokenB deployed to : ${tokenBInstance.address}`);
}

deploy()
   .then(() => process.exit(0))
   .catch((error) => {
      console.error(error);
      process.exit(1);
   });
