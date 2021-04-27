import { NextApiRequest, NextApiResponse } from 'next'
import prismaClient from '../../../lib/prisma'
import { ResponseStatusCode } from '../../../enum/response-status-code'

const productHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, query: { id }, body } = req
  const productId = id instanceof Array ? 0 : parseInt(id) || 0

  switch (method) {
    case 'GET':
      try {
        const getResponse = await prismaClient.product.findFirst({
          where: { id: productId }
        }).catch(err => err)

        return res.status(
          getResponse.code
            ? ResponseStatusCode.BadRequest
            : ResponseStatusCode.OK
          )
          .json(getResponse)
      } catch (err) {
        return res.status(ResponseStatusCode.BadRequest).json(err.message)
      }
    case 'PATCH':
      try {
        const updateResponse = await prismaClient.product.update({
          where: { id: productId },
          data: { ...body }
        }).catch(err => err)

        return res.status(
          updateResponse.code
            ? ResponseStatusCode.BadRequest
            : ResponseStatusCode.Created
          )
          .json(updateResponse)
      } catch (err) {
        return res.status(ResponseStatusCode.BadRequest).json(err.message)
      }
    case 'DELETE':
      const deleteResponse = await prismaClient.product.delete({
        where: { id: productId }
      }).catch(err => err)

      return deleteResponse.code
              ? res.status(ResponseStatusCode.BadRequest).json(deleteResponse)
              : res.status(ResponseStatusCode.NoContent).end()
    default:
      res.setHeader('Allow', ['GET', 'PATCH', 'DELETE'])
      res.status(ResponseStatusCode.MethodNotAllowed).end(`Method ${method} Not Allowed`)
  }
}

export default productHandler
