//const hardhat = require('hardhat');
const { ethers } = require('hardhat');

// Deploy function
async function deploy() {
   [account] = await ethers.getSigners();
   deployerAddress = account.address;
   console.log(`Deploying contracts using ${deployerAddress}`);

   // Deploy TokenA_ERC20
   const TokenA = await ethers.getContractFactory('TokenA');
   const tokenAInstance = await TokenA.deploy();
   await tokenAInstance.deployed();
   console.log(`TokenA deployed to : ${tokenAInstance.address}`);
}

deploy()
   .then(() => process.exit(0))
   .catch((error) => {
      console.error(error);
      process.exit(1);
   });
