import React from 'react'
import Head from 'next/head'

interface Meta {
  readonly title?: string
  readonly keywords?: string
  readonly description?: string
}

const Meta = ({ title, keywords, description }: Meta) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: 'Cobda: Online Marketplace for Streetwear Products',
  keywords: 'cobda, cobda.com, buy, sell, marketplace, streetwear, vintage, sneakers, shirts',
  description: 'Buy and Sell streetwear products including sneakers and shirts.',
}

export default Meta
