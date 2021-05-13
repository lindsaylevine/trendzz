/* eslint-disable react/jsx-props-no-spreading */
import React, { ErrorInfo } from 'react';
import Head from 'next/head';
import App, { AppInitialProps } from 'next/app';
import Router from 'next/router';
import ReactGA from 'react-ga';


// Next.JS handles this
// that's why it's not called here
// https://nextjs.org/docs/advanced-features/measuring-performance#web-vitals

class MyApp extends App {
  public render(): React.ReactElement {
    const {
      Component, pageProps, err,
    } = this.props;

    return (
      <>
        <Component
          {...pageProps}
          err={err}
        />
      </>
    );
  }
}

export default MyApp;
