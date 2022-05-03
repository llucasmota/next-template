import Document, {
  Head,
  Html,
  Main,
  NextScript,
  // DocumentInitialProps,
  // DocumentContext,
} from 'next/document';
// import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  // static async getInitialProps(
  //   ctx: DocumentContext,
  // ): Promise<DocumentInitialProps> {
  //   const sheet = new ServerStyleSheet();
  //   const originalRenderPage = ctx.renderPage;

  //   try {
  //     ctx.renderPage = () =>
  //       originalRenderPage({
  //         enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
  //       });

  //     const initialProps = await Document.getInitialProps(ctx);
  //     return {
  //       ...initialProps,
  //       styles: (
  //         <>
  //           {initialProps.styles}
  //           {sheet.getStyleElement()}
  //         </>
  //       ),
  //     };
  //   } finally {
  //     sheet.seal();
  //   }
  // }

  render(): JSX.Element {
    return (
      <Html lang="pt">
        <Head>
          <meta content="text/html;charset=UTF-8" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Open+Sans:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link
            rel="shortcut icon"
            href="/images/favicon.png"
            type="image/x-icon"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
