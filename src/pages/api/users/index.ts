import { NextApiRequest, NextApiResponse } from 'next'
import { Prisma } from '@prisma/client'
import prismaClient from '../../../lib/prisma'

const userHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req

  switch (method) {
    case 'GET':
      return res.json(await prismaClient.user.findMany())
    case 'POST':
      try {
        const user: Prisma.UserCreateInput = { ...body }
        const postResponse = await prismaClient.user.create({ data: user }).catch(error => error)

        return res.status(postResponse.code ? 400 : 201).json(postResponse)
      } catch (err) {
        return res.status(400).json(err.message)
      }
    default:
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}

export default userHandler
