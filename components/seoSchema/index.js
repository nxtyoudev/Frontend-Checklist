import Head from 'next/head';

const SeoSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.mg-pools/",
        "url": "https://www.mg-pools/",
        "name": "MG Schwimmbadtechnik - Ihr Partner Rund um das Schwimmbad",
        "datePublished": "2017-10-27T12:02:22+00:00",
        "dateModified": "2019-05-18T11:18:13+00:00",
        "description": "Ihr zuverlässiger Partner Rund um Ihr Schwimmbad - Neubau - Sanierung - Wartung un Pflege bei mir bekommen Sie das komplette Paket.",
        "inLanguage": "de-DE"
      },
      {
        "@type": "WebSite",
        "@id": "https://www.mg-pools/#website",
        "url": "https://www.mg-pools/",
        "name": "MG Schwimmbadtechnik",
        "description": "",
        "inLanguage": "de-DE"
      },
      {
        "@type": "Organization",
        "@id": "https://www.mg-pools/#organization",
        "name": "MG Schwimmbadtechnik",
        "url": "https://www.mg-pools/",
        "sameAs": [
          "https://www.instagram.com/grundmann.matthias/?hl=de",
          "https://www.facebook.com/MG-Schwimmbadtechnik-180541429404854/"
        ],
        "logo": {
          "@type": "ImageObject",
          "inLanguage": "de-DE",
          "@id": "https://www.mg-pools/#/schema/logo/image/",
          "url": "https://i.imgur.com/Hldyg7F.png",
          "contentUrl": "https://i.imgur.com/Hldyg7F.png",
          "width": 350,
          "height": 214,
          "caption": "MG Schwimmbadtechnik"
        },
        "image": {
          "@id": "https://www.mg-pools/#/schema/logo/image/"
        }
      }
    ]
  };

  return (
    <Head>
      {/* Meta tags */}
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

      {/* SEO schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Title */}
      <title>MG Schwimmbadtechnik</title>
    </Head>
  );
};

export default SeoSchema;