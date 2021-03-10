import { NextApiRequest, NextApiResponse } from 'next'

const userHandler = (req: NextApiRequest, res: NextApiResponse) => {
  const { method, query: { id } } = req

  const handlePatch = () => {
    return { patch_result: `patched world number ${id}`}
  }

  const handleDelete = () => {
    return { del_result: `deleted world number ${id}`}
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
