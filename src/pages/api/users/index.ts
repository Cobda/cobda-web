import { NextApiRequest, NextApiResponse } from 'next'
import { Prisma } from '@prisma/client'
import prismaClient from '../../../lib/prisma'
import { ResponseStatusCode } from '../../../enum/response-status-code'

const userHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req

  switch (method) {
    case 'GET':
      return res.json(await prismaClient.user.findMany())
    case 'POST':
      try {
        const user: Prisma.UserCreateInput = { ...body }
        const postResponse = await prismaClient.user.create({ data: user }).catch(error => error)

        return res.status(postResponse.code ? ResponseStatusCode.BadRequest : ResponseStatusCode.Created)
                  .json(postResponse)
      } catch (err) {
        return res.status(ResponseStatusCode.BadRequest).json(err.message)
      }
    default:
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(ResponseStatusCode.MethodNotAllowed).end(`Method ${method} Not Allowed`)
  }
}

export default userHandler
