import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, canonical, image, type = 'website', jsonLd }) {
  const fullTitle = title ? `${title} | Rekisa` : 'Rekisa — Build a stronger digital operating system for growth';
  const desc = description || 'Rekisa helps businesses build a stronger digital operating system for growth through growth marketing, eCommerce, AWS cloud enablement and practical workshops.';
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      {canonical && <link rel="canonical" href={canonical} />}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:type" content={type} />
      {image && <meta property="og:image" content={image} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      {image && <meta name="twitter:image" content={image} />}
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
}
