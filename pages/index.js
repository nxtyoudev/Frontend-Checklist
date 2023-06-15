import React from 'react';
import Head from 'next/head';

import {
  Services, Contents, Hero, Statbar, Navbar, Footer, Pools, CTA, Trust, Reference, Faq,
} from '../components';

export default () => (
  <div>
    <Head>
    <title>MG - Sommer</title>
    </Head>
    <Navbar />
    <Hero />
    <Statbar />
    <Pools />
    <CTA />
    <Trust />
    <Reference />
    <Footer />
  </div>
);
