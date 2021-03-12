import { NextApiRequest, NextApiResponse } from 'next'
import nextConnect from 'next-connect'
import multer from 'multer'

export const config: Object = {
  api: {
    bodyParser: false, // Disable body parsing, consume the body as a stream to upload the file.
  },
}

const storage: multer.StorageEngine = multer.diskStorage({
  destination: './public/uploads',
  filename: (req, file, cb) => cb(null, file.originalname),
})

const upload: multer.Multer = multer({
  storage,
  limits: {
    fileSize: 1500000,
  },
})

const apiRoute = nextConnect<NextApiRequest, NextApiResponse>({
  onError(error, req, res) {
    res.status(501).json({ error: error.message })
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` })
  },
})

apiRoute.use(upload.single('fileInput'))

apiRoute.post((req, res) => {
  res.status(200).json({ data: 'success' })
})

export default apiRoute
