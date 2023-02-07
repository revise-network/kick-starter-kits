import revise from '../../../../helpers/revise'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Process a POST request
    //Add NFT Method here.
  } else {
    // Handle any other HTTP method
    try {
      const nft = await revise.fetchNFTs()
      res.status(200).json(nft)
    } catch (error) {
      console.log('catch')
      res.status(500).json({ error })
    }
  }
}
