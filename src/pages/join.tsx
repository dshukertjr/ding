import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import { SITE_NAME } from '../utils/constants'

const Page: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Join a Room | {SITE_NAME}</title>
        <meta
          name="description"
          content={`Join a room hosted by your friend to start playing a game of ${SITE_NAME}`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main></main>
    </div>
  )
}

export default Page
