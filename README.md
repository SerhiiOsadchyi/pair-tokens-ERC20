npx hardhat run --network localhost scripts/deploy-tokenA.js
npx hardhat run --network localhost scripts/deploy-tokenB.js

npx hardhat run --network rinkeby scripts/deploy-tokenA.js
npx hardhat run --network rinkeby scripts/deploy-tokenB.js

npx hardhat run --network evmos scripts/deploy-tokenA.js
npx hardhat run --network evmos scripts/deploy-tokenB.js

npx hardhat run --network testnet scripts/deploy-tokenA.js
npx hardhat run --network testnet scripts/deploy-tokenB.js
npx hardhat run --network testnet scripts/deploy-tokenB-from-user3.js

