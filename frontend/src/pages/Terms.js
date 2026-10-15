import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function Terms() {
  return (
    <>
      <SEO title="Terms of Use" description="Terms governing use of the Rekisa website." canonical="https://rekisa.co.za/terms" />
      <section className="page-hero">
        <div className="container page-hero__inner">
          <div className="breadcrumbs"><Link to="/">Home</Link> / Terms of Use</div>
          <h1>Terms of Use</h1>
          <p>The terms governing your use of this website.</p>
        </div>
      </section>
      <section className="section">
        <div className="prose container">
          <h2>Acceptance</h2>
          <p>By using this website you agree to these terms. If you do not agree, please do not use the site.</p>

          <h2>Use of the site</h2>
          <p>You may use the site for lawful purposes only. You agree not to misuse the site, interfere with its operation, or attempt to access areas of the site that are not intended for public use.</p>

          <h2>Content</h2>
          <p>All content on this site (text, images, diagrams, code) is provided for informational purposes. Rekisa retains ownership of original content unless otherwise stated.</p>

          <h2>Third-party links</h2>
          <p>The site includes links to third-party platforms and tools. Rekisa is not responsible for the content, availability, or practices of those third parties.</p>

          <h2>No warranty</h2>
          <p>The site is provided on an &ldquo;as is&rdquo; basis. Rekisa does not warrant that the site will be uninterrupted, error-free, or free from harmful components.</p>

          <h2>Limitation of liability</h2>
          <p>To the extent permitted by law, Rekisa is not liable for any indirect, incidental, or consequential damages arising from your use of the site.</p>

          <h2>Governing law</h2>
          <p>These terms are governed by the laws of the Republic of South Africa.</p>

          <h2>Contact</h2>
          <p>For questions about these terms, email <a href="mailto:hello@rekisa.co.za">hello@rekisa.co.za</a>.</p>
        </div>
      </section>
    </>
  );
}
