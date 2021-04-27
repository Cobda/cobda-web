import { NextApiRequest, NextApiResponse } from 'next'
import { Prisma } from '@prisma/client'
import prismaClient from '../../../lib/prisma'
import { ResponseStatusCode } from '../../../enum/response-status-code'

const productHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req

  if (method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    res.status(ResponseStatusCode.MethodNotAllowed).end(`Method ${method} Not Allowed`)
  }

  try {
    const product: Prisma.ProductCreateInput = { ...body }
    const postResponse = await prismaClient.product.create({ data: product }).catch(err => err)

    res.status(
      postResponse.code
        ? ResponseStatusCode.BadRequest
        : ResponseStatusCode.Created
      )
      .json(postResponse)
  } catch (err) {
    res.status(ResponseStatusCode.BadRequest).json(err.message)
  }
}

export default productHandler
