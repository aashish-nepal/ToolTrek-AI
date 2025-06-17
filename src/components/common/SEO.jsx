import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

const SEO = ({
  title = 'Default Title',
  description = 'Default description of the page.',
  keywords = 'AI, tools, technology, blog',
  author = 'Your Name',
  image = '/default-image.png',
  url = 'https://yourwebsite.com',
}) => {
  const router = useRouter();
  const canonicalUrl = `${url}${router.asPath}`;

  return (
    <Head>
      <title>{title} | YourSiteName</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="Content-Language" content="en" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonicalUrl} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default SEO;
