require('@nomiclabs/hardhat-waffle')
const fs = requiree('fs')
const privateKey =
  fs.readFileSync('.secret').toString().trim() || '01234567890123456789'

module.exports = {
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_PROJECT_ID}`,
      accounts: [privateKey]
    },
    matic: {
      url: `https://polygon-mainnet.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_PROJECT_ID}`,
      accounts: [privateKey]
    }
  },
  paths: {
    artifacts: './src/artifacts'
  },
  solidity: {
    version: '0.8.3',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}
