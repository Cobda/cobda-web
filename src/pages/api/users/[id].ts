import { NextApiRequest, NextApiResponse } from 'next'
import prismaClient from '../../../lib/prisma'
import { ResponseStatusCode } from '../../../enum/response-status-code'

const userHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, query: { id }, body } = req
  const userId = id instanceof Array ? 0 : parseInt(id) || 0

  switch (method) {
    case 'PATCH':
      try {
        const updateResponse = await prismaClient.user.update({
          where: { id: userId },
          data: { ...body }
        }).catch(err => err)

        return res.status(updateResponse.code ? ResponseStatusCode.BadRequest : ResponseStatusCode.Created)
                  .json(updateResponse)
      } catch (err) {
        return res.status(ResponseStatusCode.BadRequest).json(err.message)
      }
    case 'DELETE':
      const deleteResponse = await prismaClient.user.delete({
        where: { id: userId }
      }).catch(err => err)

      return deleteResponse.code ? res.status(ResponseStatusCode.BadRequest).json(deleteResponse)
                                 : res.status(ResponseStatusCode.NoContent).end()
    default:
      res.setHeader('Allow', ['PATCH', 'DELETE'])
      res.status(ResponseStatusCode.MethodNotAllowed).end(`Method ${method} Not Allowed`)
  }
}

export default userHandler
