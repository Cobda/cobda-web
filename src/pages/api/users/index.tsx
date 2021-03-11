import { NextApiRequest, NextApiResponse } from 'next'
import { Role } from '../../../enum/role'
import { user, product } from '../../../entity/entities'

const userHandler = (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req

  // TODO: Handle the function properly
  const handlePatch = () => {
    return {
      message: 'This is a PATCH request, currently in progress...',
      context: body
    }
  }

  // TODO: Handle the function properly
  const handlePost = () => {
    return {
      users: mockUsers(),
      context: body
    }
  }

  const mockUsers = () => {
    const userNames: string[] = ['mocking-bird', 'wood-pecker', 'black-crow']
    const products: Array<ReturnType<typeof product>> = [product('shoe1', 1), product('shoe2', 1), product('shoe3', 1)]
    const histories: Array<ReturnType<typeof product>> = products.reverse()
    const users: Array<ReturnType<typeof user>> = userNames.map(name => {
      const password: string = [...name].reverse().join('')
      const splitName: string[] = name.split('-')

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
