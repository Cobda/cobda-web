import { NextApiHandler } from 'next'
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options = {
  providers: []
}

const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options)
export default authHandler
