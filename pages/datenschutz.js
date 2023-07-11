import Head from 'next/head'
import React from 'react'
import DatenschutzNavbar from '../components/datenschutzNavbar';
import DatenschutzContent from '../components/datenschutzContent';
import Footer from '../components/footer'

const offer = () => {
  return (
    <div>
      <Head>
        <title>Impressum</title>
        <meta name="description" content="Dein zuverlässiger Partner rund um Deinen Pool in München und Umgebung. Von der Planung bis zum Bau begleiten wir dich zum Deinem Pool und bieten auch die Möglichkeit der Wartung, Reparatur und Service." />
        <link rel="icon" href="/logo.png" />
      </Head>
      <DatenschutzNavbar />
      <div className="w-full flex flex-col items-center">
        <DatenschutzContent />
      </div>
      <Footer />
    </div>
  )
}

export default offer