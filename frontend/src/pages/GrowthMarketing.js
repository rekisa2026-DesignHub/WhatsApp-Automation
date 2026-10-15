import React from 'react';
import ServiceTemplate from './ServiceTemplate';
import GrowthMockup from '../components/mockups/GrowthMockup';

export default function GrowthMarketing() {
  return (
    <ServiceTemplate
      slug="growth-marketing-enablement"
      seoTitle="Growth Marketing Enablement for South African Businesses"
      description="Build a more predictable growth system. We help businesses design and implement lead generation, outbound, paid acquisition, conversion tracking and follow-up workflows that actually hold together."
      Mockup={GrowthMockup}
      accent="coral"
      showPricing
      showModules
    />
  );
}
