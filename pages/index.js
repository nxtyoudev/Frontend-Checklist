import React from 'react';
import Head from 'next/head';

import {
  Services, Contents, Hero, Statbar, Navbar, Footer, Pools, CTA, Trust,
} from '../components';
import AboutBrands from '../components/aboutBrands';
import AboutReviews from '../components/aboutReviews';
import Faq from '../components/Faqs';
import SeoSchema from '../components/seoSchema';

export default () => (
  <div>
    <Head>
      <title>Poolbau und Schwimmbadtechnik - MG Pools</title>
      <meta name="description" content="Dein zuverlässiger Partner rund um Deinen Pool in München und Umgebung. Von der Planung bis zum Bau begleiten wir dich zum Deinem Pool und bieten auch die Möglichkeit der Wartung, Reparatur und Service." />
      <link rel="icon" href="/logo.png" />
    </Head>
    <Navbar />
    <Hero />
    <Statbar />
    <Pools />
    <CTA />
    <Trust />
    <AboutBrands />
    <AboutReviews />
    <Faq />
    <Footer />
  </div>
);
