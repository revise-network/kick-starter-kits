/** @type import('hardhat/config').HardhatUserConfig */
require('@nomiclabs/hardhat-waffle')
require('dotenv').config()
const { PRIVATE_KEY, MUMBAI_RPC } = process.env
// console.log({ PRIVATE_KEY, MUMBAI_RPC })
module.exports = {
  defaultNetwork: 'mumbai',
  networks: {
    mumbai: {
      url: MUMBAI_RPC,
      accounts: [PRIVATE_KEY],
    },
    hooman: {
      url: MUMBAI_RPC,
      accounts: [PRIVATE_KEY],
    },
  },
  solidity: {
    version: '0.8.17',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
}
