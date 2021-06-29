import React from 'react'
import Head from 'next/head'
import { Main } from '../components/Main'
import { Aside } from '../components/Aside'
import { Controls } from '../components/Controls'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>New tab</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Main />
      <Aside />
      <Controls />
    </div>
  )
}
