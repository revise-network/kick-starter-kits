import revise from '../../../../helpers/revise'

export default async function handler(req, res) {
  //Get dynamic id example api/revise/collection/c0d332b0-7c3a-41e4-b9d7-947a2b7fcc4b
  const { id } = req.query

  if (req.method === 'POST') {
    // Process a POST request
  } else {
    // Handle any other HTTP method
    try {
      const collection = await revise.fetchCollection(id)
      res.status(200).json(collection)
    } catch (error) {
      console.log('catch')
      res.status(500).json({ error })
    }
  }
}
