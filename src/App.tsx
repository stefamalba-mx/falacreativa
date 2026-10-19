import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { BenefitsSection } from './components/BenefitsSection';
import { ServicesSection } from './components/ServicesSection';
import { AuthoritySection } from './components/AuthoritySection';
import { SocialProofSection } from './components/SocialProofSection';
import { LastCallSection } from './components/LastCallSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-amber-600 selection:text-white">
      {/* Navigation bar following Top Bar Contract */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Hero Section with Split layout & 3 quick bullet cards */}
        <HeroSection />

        {/* 2. Benefits Section with 3-column grid & centered CTA */}
        <BenefitsSection />

        {/* Deep Dive Services Section */}
        <ServicesSection />

        {/* 3. Authority Section with solid contrast background & metrics */}
        <AuthoritySection />

        {/* 4. Social Proof Section with 2 client testimonials & circular photos */}
        <SocialProofSection />

        {/* 5. Last Call Section with dark background & final CTA */}
        <LastCallSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
