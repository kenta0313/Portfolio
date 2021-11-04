import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app'
import React from 'react';
import Head from 'next/head';
import Header from '../components/layout/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <Header />
      <div className="mx-auto max-w-screen-md">
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
