import { NextApiRequest, NextApiResponse } from 'next'

const userHandler = (req: NextApiRequest, res: NextApiResponse) => {
  const { method, query: { id } } = req

  const handleGet = () => {
    return { hello: `world number ${id}` }
  }

  const handlePatch = () => {
    return { patch_result: `patched world number ${id}`}
  }

  const handleDelete = () => {
    return { del_result: `deleted world number ${id}`}
  }

  switch (method) {
    case 'GET':
      return res.json(handleGet())
    case 'PATCH':
      return res.json(handlePatch())
    case 'DELETE':
      return res.json(handleDelete())
    default:
      res.setHeader('Allow', ['GET', 'PATCH', 'DELETE'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}

export default userHandler
