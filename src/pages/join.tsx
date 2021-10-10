import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import AppBar from '../components/app-bar'
import Wrapper from '../components/wrapper'
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

      <AppBar title="Join a Room"></AppBar>

      <Wrapper></Wrapper>
    </div>
  )
}

export default Page
