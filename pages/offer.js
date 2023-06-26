import Head from 'next/head'
import React from 'react'
import OfferHero from '../components/offerHero'
import OfferNavbar from '../components/offerNavbar';
import Footer from '../components/footer'

const offer = () => {
  return (
    <div>
      <Head>
        <title>Offer</title>
      </Head>
      <OfferNavbar />
      <div className="w-full flex flex-col items-center">
        <OfferHero />
      </div>
      <Footer />
    </div>
  )
}

export default offer