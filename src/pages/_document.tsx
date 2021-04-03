import React from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import { DocumentContext } from 'next/document';
import { ServerStyleSheet as StyledComponentSheets } from 'styled-components';
import { ServerStyleSheets as MaterialUiServerStyleSheets } from '@material-ui/core/styles';

export default class CustomDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<any> {
    const styledComponentSheet = new StyledComponentSheets();
    const materialUiSheets = new MaterialUiServerStyleSheets();
    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) =>
          styledComponentSheet.collectStyles(
            materialUiSheets.collect(<App {...props} />)
          ),
      });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: [
        ...React.Children.toArray(initialProps.styles),
        materialUiSheets.getStyleElement(),
        styledComponentSheet.getStyleElement(),
      ],
    };
  }

  render() {
    return (
      <Html lang="ja">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Playball&display=swap"
            rel="stylesheet"
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
