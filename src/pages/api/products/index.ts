import { NextApiRequest, NextApiResponse } from 'next'
import { Prisma } from '@prisma/client'
import prismaClient from '../../../lib/prisma'
import { ResponseStatusCode } from '../../../enum/response-status-code'

const productHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req

  switch (method) {
    case 'GET':
      return res.json(await prismaClient.product.findMany())
    case 'POST':
      try {
        const product: Prisma.ProductCreateInput = { ...body }
        const postResponse = await prismaClient.product.create({ data: product }).catch((err: any) => err)
    
        return res.status(
          postResponse.code
            ? ResponseStatusCode.BadRequest
            : ResponseStatusCode.Created
          )
          .json(postResponse)
      } catch (err: any) {
        return res.status(ResponseStatusCode.BadRequest).json(err.message)
      }
    default:
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(ResponseStatusCode.MethodNotAllowed).end(`Method ${method} Not Allowed`)
  }
}

export default productHandler
