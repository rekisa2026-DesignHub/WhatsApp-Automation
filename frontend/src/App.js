import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';
import './App.css';

import WhatsAppAutomation from './pages/WhatsAppAutomation';
import GrowthMarketing from './pages/GrowthMarketing';
import DigitalCommerce from './pages/DigitalCommerce';
import AWSCloud from './pages/AWSCloud';
import WorkshopsOverview from './pages/WorkshopsOverview';
import WorkshopDetail from './pages/WorkshopDetail';
import Audit from './pages/Audit';
import Resources from './pages/Resources';
import BlogArticle from './pages/BlogArticle';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import PartnerDisclosure from './pages/PartnerDisclosure';

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<WhatsAppAutomation />} />
            <Route path="/services/growth-marketing-enablement" element={<GrowthMarketing />} />
            <Route path="/services/digital-commerce-enablement" element={<DigitalCommerce />} />
            <Route path="/services/whatsapp-automation" element={<WhatsAppAutomation />} />
            <Route path="/services/aws-cloud-enablement" element={<AWSCloud />} />
            <Route path="/workshops" element={<WorkshopsOverview />} />
            <Route path="/workshops/:slug" element={<WorkshopDetail />} />
            <Route path="/audit" element={<Audit />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/resources/:slug" element={<BlogArticle />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/partner-disclosure" element={<PartnerDisclosure />} />
            <Route path="*" element={<WhatsAppAutomation />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </HelmetProvider>
  );
}
