import { NextApiRequest, NextApiResponse } from 'next'

const userHandler = (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req

  const handleGet = () => {
    return { worlds: "Many worlds"}
  }

  const handlePost = () => {
    return { context: body }
  }

  switch (method) {
    case 'GET':
      return res.json(handleGet())
    case 'POST':
      return res.json(handlePost())
    default:
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}

export default userHandler
