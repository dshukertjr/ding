import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import { SITE_NAME } from '../utils/constants'

const Page: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create a Room | {SITE_NAME}</title>
        <meta
          name="description"
          content={`Create a new room to become a host enjoy ${SITE_NAME} with your friends!`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main></main>
    </div>
  )
}

export default Page
