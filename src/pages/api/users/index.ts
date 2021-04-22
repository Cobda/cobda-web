import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient, Prisma } from '@prisma/client'

const userHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req
  const prisma = new PrismaClient()

  switch (method) {
    case 'GET':
      return res.json(await prisma.user.findMany())
    case 'POST':
      const user: Prisma.UserCreateInput = { ...body }
      const result = await prisma.user.create({ data: user }).catch(error => error)

      return !result.code ? res.status(201).json(result) : res.status(400).json(result)
    default:
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }

  await prisma.$disconnect()
}

export default userHandler
