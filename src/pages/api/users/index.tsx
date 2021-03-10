import { NextApiRequest, NextApiResponse } from 'next'

const userHandler = (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req

  const handlePatch = () => {
    return { worlds: "Patching many worlds"}
  }

  const handlePost = () => {
    return { context: body }
  }

  switch (method) {
    case 'POST':
      return res.json(handlePost())
    case 'PATCH':
      return res.json(handlePatch())
    default:
      res.setHeader('Allow', ['POST', 'PATCH'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}

export default userHandler
