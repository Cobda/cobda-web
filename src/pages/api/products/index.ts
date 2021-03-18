import { NextApiRequest, NextApiResponse } from 'next'
import { product } from '../../../entity/entities'

const productHandler = (req: NextApiRequest, res: NextApiResponse) => {
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
    const products: Array<ReturnType<typeof product>> = [product('shoe1', 1), product('shoe2', 1), product('shoe3', 1)]

    return {
      products,
      context: body
    }
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

export default productHandler
