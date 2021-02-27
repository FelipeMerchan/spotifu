import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="robots" content="index,follow" />
          <meta name="description" content="" />
          <meta name="keywords" content="Películas, online, estrenos, streaming" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument