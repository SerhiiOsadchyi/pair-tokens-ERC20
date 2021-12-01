//const hardhat = require('hardhat');
const { ethers } = require('hardhat');

// Deploy function
async function deploy() {
   accounts = await ethers.getSigners();

   for (let i = 0; i < accounts.length; i++) {
      console.log(`accounts[${i}] balance: ${await accounts[i].getBalance()}`);
      console.log(`accounts[${i}] address: ${await accounts[i].address}`);
   }
   deployerAddress = accounts[2].address;
   console.log(`Deploying contracts using ${deployerAddress}`);

   // Deploy TokenB_ERC20
   const TokenB = await ethers.getContractFactory('TokenB');
   //const tokenBInstance = await TokenB.connect(deployerAddress).deploy();
   const tokenBInstance = await TokenB.deploy(deployerAddress);
   await tokenBInstance.deployed();
   console.log(`TokenB deployed to : ${tokenBInstance.address}`);
}

deploy()
   .then(() => process.exit(0))
   .catch((error) => {
      console.error(error);
      process.exit(1);
   });
