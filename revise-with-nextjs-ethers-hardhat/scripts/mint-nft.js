
const CONTRACT_ADDRESS = "0x34a4B85D11D79AE1ee46ed292Ee1812cd179973a"
const META_DATA_URL = 'https://revise.link/35472372-08d2-4fb2-94c9-3dbcf7f2245c'
async function mintNFT(contractAddress, metaDataURL) {
   const DynamicNFT = await ethers.getContractFactory("DynamicNFT")
   const [owner] = await ethers.getSigners()
   await DynamicNFT.attach(contractAddress).mintNFT(owner.address, metaDataURL)
   console.log("NFT minted to: ", owner.address)
}

mintNFT(CONTRACT_ADDRESS, META_DATA_URL)
   .then(() => process.exit(0))
   .catch((error) => {
       console.error(error);
       process.exit(1);
   });