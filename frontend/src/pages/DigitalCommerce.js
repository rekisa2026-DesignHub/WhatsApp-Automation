import React from 'react';
import ServiceTemplate from './ServiceTemplate';
import CommerceMockup from '../components/mockups/CommerceMockup';

export default function DigitalCommerce() {
  return (
    <ServiceTemplate
      slug="digital-commerce-enablement"
      seoTitle="eCommerce Enablement Services"
      description="Build a stronger eCommerce system. We connect your storefront, payments, marketplaces and customer journeys into one working system — supporting discovery, sales, service and follow-up."
      Mockup={CommerceMockup}
      accent="purple"
      showCarousel
    />
  );
}
