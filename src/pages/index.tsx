import type { NextPage } from 'next'
import Head from 'next/head'
import { SITE_NAME } from '../utils/constants'

const Page: NextPage = () => {
  return (
    <div>
      <Head>
        <title>{{ SITE_NAME }} | party quiz game</title>
        <meta
          name="description"
          content={`${SITE_NAME} is a simple fun quiz game where one user can be a host and others compete who can answer the most!`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main></main>

      <footer></footer>
    </div>
  )
}

export default Page
