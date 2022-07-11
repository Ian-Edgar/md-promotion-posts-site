import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href='http://fonts.cdnfonts.com/css/maison-neue'
            rel='stylesheet'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <div id='notifications'></div>
          <footer />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
