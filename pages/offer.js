import Head from 'next/head'
import React from 'react'
import OfferHero from '../components/offerHero'
import AboutNavbar from '../components/aboutNavbar';
import OfferServices from '../components/offerServices';

const offer = () => {
  return (
    <div>
      <Head>
        <title>Offer</title>
      </Head>
      <AboutNavbar />
      <div className="w-full flex flex-col items-center">
        <OfferHero />
      </div>
        {/* <OfferServices /> */}
    </div>
  )
}

export default offer