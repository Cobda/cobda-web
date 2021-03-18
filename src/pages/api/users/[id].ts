import { NextApiRequest, NextApiResponse } from 'next'

const userHandler = (req: NextApiRequest, res: NextApiResponse) => {
  const { method, query: { id } } = req

  // TODO: Handle the function properly
  const handlePatch = () => {
    return {
      message: `This is a PATCH request, it should patch id: ${id}. Currently in progress...`,
      id: id
    }
  }

  // TODO: Handle the function properly
  const handleDelete = () => {
    return {
      message: `This is a DELETE request, it should DELETE id: ${id}. Currently in progress...`,
      id: id
    }
  }

  switch (method) {
    case 'PATCH':
      return res.json(handlePatch())
    case 'DELETE':
      return res.json(handleDelete())
    default:
      res.setHeader('Allow', ['PATCH', 'DELETE'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}

export default userHandler
