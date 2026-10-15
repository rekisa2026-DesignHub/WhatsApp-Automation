import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function Privacy() {
  return (
    <>
      <SEO title="Privacy Policy" description="How Rekisa collects and uses information." canonical="https://rekisa.co.za/privacy" />
      <section className="page-hero">
        <div className="container page-hero__inner">
          <div className="breadcrumbs"><Link to="/">Home</Link> / Privacy Policy</div>
          <h1>Privacy Policy</h1>
          <p>How we handle information collected through this website.</p>
        </div>
      </section>
      <section className="section">
        <div className="prose container">
          <h2>Overview</h2>
          <p>This policy explains what personal information Rekisa collects through this website, how we use it, and the choices you have. It applies to information collected when you submit an enquiry, sign up for our newsletter, or otherwise interact with the site.</p>

          <h2>What we collect</h2>
          <ul>
            <li><strong>Enquiry information:</strong> your name, business details, contact details and the content of any enquiries you submit through our forms.</li>
            <li><strong>Newsletter information:</strong> the email address (and optionally the name) you provide when you sign up.</li>
            <li><strong>Usage information:</strong> basic analytics such as page views, referring pages and general location, collected via cookies and analytics tools.</li>
          </ul>

          <h2>How we use it</h2>
          <ul>
            <li>To respond to your enquiries and provide information about our services, workshops and tools.</li>
            <li>To send you resources you have subscribed to.</li>
            <li>To understand how the site is used and improve it over time.</li>
            <li>To comply with legal obligations.</li>
          </ul>

          <h2>Sharing</h2>
          <p>We do not sell personal information. We may share information with service providers who help us operate the site (for example, email delivery via AWS SES or analytics providers), all bound by appropriate confidentiality obligations.</p>

          <h2>Your rights</h2>
          <p>You may request access to, correction of, or deletion of your personal information at any time. Contact us at hello@rekisa.co.za and we will action reasonable requests promptly.</p>

          <h2>Cookies</h2>
          <p>The site uses cookies for analytics and functionality. You can control cookies through your browser settings.</p>

          <h2>Contact</h2>
          <p>For any privacy questions, email <a href="mailto:hello@rekisa.co.za">hello@rekisa.co.za</a>.</p>
        </div>
      </section>
    </>
  );
}
