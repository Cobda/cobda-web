import { NextApiHandler } from 'next'
import NextAuth, { Session, User } from 'next-auth'
import Providers from 'next-auth/providers'
import prismaClient from '../../../lib/prisma'

let currentUser: any
const providers = {
  providers: [
    Providers.Credentials({
      name: 'Credentials',
      credentials: {},
      authorize: async (credentials) => {
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
          currentUser = user[0]

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
    async session(session: any, user: any) {
      if (currentUser) {
        const { username, firstName, lastName, profileImagePath } = currentUser
        session.user.name = `${username}/${firstName}/${lastName}`
        session.user.image = profileImagePath
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
