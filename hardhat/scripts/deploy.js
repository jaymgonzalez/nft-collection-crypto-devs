const { ethers } = require('hardhat')
require('dotenv').config({ path: '.env' })

async function main() {}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
