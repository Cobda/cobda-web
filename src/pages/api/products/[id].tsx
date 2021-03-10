import { NextApiRequest, NextApiResponse } from 'next'

const productHandler = (req: NextApiRequest, res: NextApiResponse) => {
  const { method, query: { id } } = req

  const handlePatch = () => {
    return {
      message: `This is a PATCH request, it should patch id: ${id}. Currently in progress...`,
      id: id
    }
  }

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

export default productHandler
