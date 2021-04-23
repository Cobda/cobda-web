import { NextApiHandler } from 'next'
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import prismaClient from '../../../lib/prisma'

const providers = {
  providers : [
    Providers.Credentials({
      name: 'Credentials',
      credentials: {},
      authorize: async (credentials) => {
        const user = await prismaClient.user.findMany({
          where: {
            email: credentials.email,
            password: credentials.password
          }
        }).catch(error => error)
        // TODO: Send useful error message
        return !user.code && user.length ? user[0] : new Error('The email or password is incorrect.')
      }
    })
  ]
}

const pages = {
  pages: {
    signIn: '/sign-in',
    error: '/sign-in'
  }
}

const options = {
  ...providers,
  ...pages
}

const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options)
export default authHandler
