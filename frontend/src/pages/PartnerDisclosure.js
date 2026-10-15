import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function PartnerDisclosure() {
  return (
    <>
      <SEO title="Partner Disclosure" description="How Rekisa recommends partner platforms and manages referral relationships." canonical="https://rekisa.co.za/partner-disclosure" />
      <section className="page-hero">
        <div className="container page-hero__inner">
          <div className="breadcrumbs"><Link to="/">Home</Link> / Partner Disclosure</div>
          <h1>Partner Disclosure</h1>
          <p>How we recommend digital tools and manage partner relationships.</p>
        </div>
      </section>
      <section className="section">
        <div className="prose container">
          <h2>Referral relationships</h2>
          <p>
            Rekisa may earn a referral commission when you sign up for selected partner platforms through our links. This applies to platforms we recommend during engagements, workshops and, where relevant, in our resources.
          </p>

          <h2>How we make recommendations</h2>
          <p>
            Our recommendations are based on business fit and practical use cases. We recommend tools we have used, implemented for clients, or evaluated carefully. Commercial arrangements with partners do not determine whether a tool is featured.
          </p>

          <h2>What this means for you</h2>
          <ul>
            <li>You pay the same price whether you sign up via our link or directly.</li>
            <li>You can choose to sign up directly with any partner platform.</li>
            <li>You can request our impartial recommendation for any category we cover.</li>
          </ul>

          <h2>Questions</h2>
          <p>If you would like to know more about how we evaluate specific tools, email <a href="mailto:hello@rekisa.co.za">hello@rekisa.co.za</a>.</p>
        </div>
      </section>
    </>
  );
}
