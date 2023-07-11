import React from 'react';
import AboutNavbar from '../components/aboutNavbar';
import AboutHero from '../components/aboutHero';
import Footer from '../components/footer'
import AboutDescription from '../components/aboutDescription';
import AboutStats from '../components/aboutStats';
import Head from 'next/head';
import AboutValues from '../components/aboutValues';
import AboutCarousel from '../components/aboutCarousel';
import AboutBrands from '../components/aboutBrands';
import AboutReviews from '../components/aboutReviews';

const about = () => {
    return (
        <div className="about-container">
            <Head>
                <title>Über Matthias Grundmann - Poolbau und Schwimmbadtechnik - MG Pools</title>
                <meta name="description" content="Dein zuverlässiger Partner rund um Deinen Pool in München und Umgebung. Von der Planung bis zum Bau begleiten wir dich zum Deinem Pool und bieten auch die Möglichkeit der Wartung, Reparatur und Service." />
                <link rel="icon" href="/logo.png" />
            </Head>
            <AboutNavbar />
            <AboutHero />
            <AboutDescription />
            <AboutStats />
            <AboutValues />
            <AboutCarousel />
            <AboutBrands />
            <AboutReviews />
            <Footer />
        </div>
    )
}

export default about