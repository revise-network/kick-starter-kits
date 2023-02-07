import revise from '../../../../helpers/revise'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Process a POST request
  } else {
    // Handle any other HTTP method
    try {
      const collections = await revise.fetchCollections()
      res.status(200).json(collections)
    } catch (error) {
      console.log('catch')
      res.status(500).json({ error })
    }
  }
}
