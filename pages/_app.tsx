/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import App from 'next/app';


class MyApp extends App {
  public render() {
    const {
      Component, pageProps
    } = this.props;

    return (
      <>
        <Component
          {...pageProps}
        />
      </>
    );
  }
}

export default MyApp;
