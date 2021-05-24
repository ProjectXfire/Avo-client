import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

  render() {
    return (
      <Html>
        <Head>
          {/*Favicon*/}
          {/*Webfont*/}
          {/*Styledsheet*/}
          {/*scripts*/}
        </Head>
        <body className='my-class'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument