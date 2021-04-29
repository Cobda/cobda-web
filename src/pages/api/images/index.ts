import { NextApiRequest, NextApiResponse } from 'next'

const imagesHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req

  if (method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${method} Not Allowed`)
  }

  const visionApiRequest = JSON.stringify({
    requests: [{
        image: { content: body.base64EncodedImage },
        features: [{ type: 'LABEL_DETECTION' }]
      }]
  })
  const fetchSettings = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: visionApiRequest,
  }
  const visionApiResponse = await fetch(`https://vision.googleapis.com/v1/images:annotate?key=${process.env.GOOGLE_API_KEY}`, fetchSettings)
  const response = await visionApiResponse.json()

  if (response.error) {
    res.status(400).json(response)
  }

  const isSteetwear = (): boolean => {
    const isValid = (description: string, score: number) => {
      const validKeywords = ['footwear', 'shoes', 'sneakers', 'shirt', 't-shirt', 'top']
      const validPercent = 0.8
      
      return validKeywords.includes(description) && score >= validPercent
    }

    const labels = response.responses[0].labelAnnotations
    const steetwear = labels.filter((label: any) => isValid(label.description.toLowerCase(), label.score))

    return steetwear.length
  }

  if (isSteetwear()) {
    res.json({ isAllowed: true })
  } else {
    res.status(400).json({ isAllowed: false })
  }
}

export default imagesHandler
