import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import { SITE_NAME } from '../utils/constants'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../public/img/logo.svg'

const Page: NextPage = () => {
  return (
    <div>
      <Head>
        <title>{SITE_NAME} | party quiz game</title>
        <meta
          name="description"
          content={`${SITE_NAME} is a simple fun quiz game where one user can be a host and others compete who can answer the most!`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen">
        <div className="h-96 bg-party bg-center flex items-center justify-center">
          <Image src={logo} />
        </div>
        <div className="flex flex-col items-stretch px-6 mt-8">
          <Link href="/create">
            <a className="border-2 border-gray-700 text-gray-700 py-4 text-center rounded mb-8">
              Create a Room
            </a>
          </Link>
          <Link href="/join">
            <a className="border-2 border-gray-700 text-gray-700 py-4 text-center rounded mb-5">
              Join a Room
            </a>
          </Link>
        </div>
      </main>
    </div>
  )
}

export default Page
