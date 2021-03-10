import { NextApiRequest, NextApiResponse } from 'next'
import { Role } from '../../../enum/role'
import { user, product } from '../../../entity/entities'

const userHandler = (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req

  const handlePatch = () => {
    return {
      message: 'This is a PATCH request, currently in progress...',
      context: body
    }
  }

  const handlePost = () => {
    return {
      users: mockUsers(),
      context: body
    }
  }

  const mockUsers = () => {
    const userNames = ['mocking-bird', 'wood-pecker', 'black-crow']
    const products = [product('shoe1', 1), product('shoe2', 1), product('shoe3', 1)]
    const histories = products.reverse()
    const users = userNames.map(name => {
      const password = [...name].reverse().join('')
      const splitName = name.split('-')

      return user(name, password, splitName[0], splitName[1], '0', Role.User, products, histories)
    })

    return users
  }

  switch (method) {
    case 'POST':
      return res.json(handlePost())
    case 'PATCH':
      return res.json(handlePatch())
    default:
      res.setHeader('Allow', ['POST', 'PATCH'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}

export default userHandler
