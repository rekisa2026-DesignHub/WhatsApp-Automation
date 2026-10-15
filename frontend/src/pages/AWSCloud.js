import React from 'react';
import ServiceTemplate from './ServiceTemplate';
import CloudMockup from '../components/mockups/CloudMockup';

export default function AWSCloud() {
  return (
    <ServiceTemplate
      slug="aws-cloud-enablement"
      seoTitle="AWS Cloud Enablement Services for Businesses"
      description="Build the cloud foundation behind your growth. We assess cloud readiness, plan and execute AWS migrations, and build reliable, cost-efficient, AI-ready infrastructure that supports the way you actually operate."
      Mockup={CloudMockup}
      accent="lime"
    />
  );
}
