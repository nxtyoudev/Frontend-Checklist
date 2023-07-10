import Head from 'next/head'
import React from 'react'
import OfferHero from '../components/offerHero'
import OfferNavbar from '../components/offerNavbar';
import Footer from '../components/footer'

const offer = () => {
  return (
    <div>
      <Head>
        <title>Angebot: Poolbau und Schwimmbadtechnik</title>
        <meta name="description" content="Dein zuverlässiger Partner rund um Deinen Pool in München und Umgebung. Von der Planung bis zum Bau begleiten wir dich zum Deinem Pool und bieten auch die Möglichkeit der Wartung, Reparatur und Service." />
        <link rel="icon" href="/logo.jpg" />
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