import { NextApiRequest, NextApiResponse } from 'next'
import prismaClient from '../../../lib/prisma'

const userHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, query: { id }, body } = req
  const userId = id instanceof Array ? 0 : parseInt(id) || 0

  switch (method) {
    case 'PATCH':
      try {
        const updateResponse = await prismaClient.user.update({
          where: {
            id: userId
          },
          data: {
            ...body
          }
        }).catch(error => error)

        return res.status(updateResponse.code ? 400 : 201).json(updateResponse)
      } catch (err) {
        return res.status(400).json(err.message)
      }
    case 'DELETE':
      const deleteResponse = await prismaClient.user.delete({
        where: {
          id: userId
        }
      }).catch(error => error)

      return deleteResponse.code ? res.status(400).json(deleteResponse) : res.status(204).end()
    default:
      res.setHeader('Allow', ['PATCH', 'DELETE'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}

export default userHandler
