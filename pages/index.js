import React from 'react';
import Head from 'next/head';

import {
  Services, Contents, Hero, Statbar, Navbar, Footer, Pools, CTA, Trust,
} from '../components';
import AboutBrands from '../components/aboutBrands';
import AboutReviews from '../components/aboutReviews';
import Faq from '../components/Faqs';

export default () => (
  <div>
    <Head>
      <title>MG - Sommer</title>
      <link rel="icon" href="/logo.jpg" />
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
