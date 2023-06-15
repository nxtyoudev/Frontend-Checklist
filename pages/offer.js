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
        <OfferHero />
        <OfferServices />
    </div>
  )
}

export default offer