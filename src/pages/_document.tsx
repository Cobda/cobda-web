import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class CustomDocument extends Document {
  return = (): JSX.Element => (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default CustomDocument;
