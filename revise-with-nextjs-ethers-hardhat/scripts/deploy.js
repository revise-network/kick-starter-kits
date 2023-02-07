async function deployContract() {
  const DynamicNFT = await hre.ethers.getContractFactory('DynamicNFT')
  const dynamicNFT = await DynamicNFT.deploy()

  await dynamicNFT.deployed()

  // This solves the bug in Mumbai network where the contract address is not the real one
  const txHash = dynamicNFT.deployTransaction.hash

  const txReceipt = await ethers.provider.waitForTransaction(txHash)
  const contractAddress = txReceipt.contractAddress
  console.log('Contract deployed to address:', contractAddress)
}

deployContract()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
