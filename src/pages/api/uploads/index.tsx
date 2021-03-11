import { NextApiRequest, NextApiResponse } from 'next'
import nextConnect from 'next-connect'
import multer from 'multer'

export const config = {
  api: {
    bodyParser: false, // Disable body parsing, consume the body as a stream to upload the file.
  },
}

const upload = multer({
  storage: multer.diskStorage({
    destination: './public/uploads',
    filename: (req, file, cb) => cb(null, file.originalname),
  }),
})

const apiRoute = nextConnect({
  onError(error, req: NextApiRequest, res: NextApiResponse) {
    res
      .status(501)
      .json({ error: `Server Error ${error.message}` })
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` })
  },
})

apiRoute.use(upload.single('fileInput'))

apiRoute.post((req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ data: 'success' })
})

export default apiRoute
