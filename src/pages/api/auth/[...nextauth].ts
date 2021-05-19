import axios from 'axios'
import { NextApiHandler } from 'next'
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import prismaClient from '../../../lib/prisma'

const providers = {
  providers: [
    Providers.Credentials({
      name: 'Credentials',
      credentials: {},
      authorize: async (credentials: any) => {
        const user = await prismaClient.user
          .findMany({
            where: {
              email: credentials.email,
              password: credentials.password
            }
          })
          .catch((err: any) => err)
        const isUserAuthenticated: boolean = !user.code && user.length

        // TODO: Send useful error message
        if (isUserAuthenticated) {
          return user[0]
        } else {
          throw new Error('The email or password is incorrect.')
        }
      }
    })
  ]
}

const callbacks = {
  callbacks: {
    async session(session: any) {
      if (session.user) {
        await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users`).then((response) => {
          const currentUser = response.data.filter((user: any) => user.email === session.user.email)
          session.user = currentUser[0]
        })
      }

      return session
    }
  }
}

const pages = {
  pages: {
    signIn: '/sign-in',
    error: '/sign-in'
  }
}

const options = {
  ...providers,
  ...callbacks,
  ...pages
}

const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options)
export default authHandler
