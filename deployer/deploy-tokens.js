//const hardhat = require('hardhat');
const { ethers } = require('hardhat');

// Deploy function
async function deploy() {
   [account] = await ethers.getSigners();
   deployerAddress = account.address;
   console.log(`Deploying contracts using ${deployerAddress}`);

   // Deploy TokenA_ERC20
   const tokenA = await ethers.getContractFactory('TokenA');
   const tokenAInstance = await tokenA.deploy();
   await tokenAInstance.deployed();
   console.log(`TokenA deployed to : ${tokenAInstance.address}`);

   // Deploy TokenB_ERC20
   const tokenB = await ethers.getContractFactory('TokenB');
   console.log(`TokenB : ${tokenB}`);
   const tokenBInstance = await tokenB.deploy(deployerAddress);
   console.log(`tokenBInstance : ${tokenBInstance}`);
   await tokenBInstance.deployed();
   console.log(`TokenB deployed to : ${tokenBInstance.address}`);
}

deploy()
   .then(() => process.exit(0))
   .catch((error) => {
      console.error(error);
      process.exit(1);
   });
