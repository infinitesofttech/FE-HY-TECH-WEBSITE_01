import React from 'react';

// ─── Section imports ──────────────────────────────────────────────────
import TrustLogos from '../components/sections/TrustLogos';
import BrowseCategories from '../components/sections/BrowseCategories';
import ExploreServices from '../components/sections/ExploreServices';
import AboutPlatform from '../components/sections/AboutPlatform';
import HowItWorks from '../components/sections/HowItWorks';
import FAQ from '../components/sections/FAQ';
import FinalCTA from '../components/sections/FinalCTA';
import ServicesMarquee from '../components/sections/ServicesMarquee';
import HeroSlider from '../components/sections/HeroSlider';
import StatsCounter from '../components/sections/StatsCounter';
import Testimonials from '../components/sections/Testimonials';
import UpcomingEvents from '../components/sections/UpcomingEvents';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>

      {/* ══════════════ HERO SLIDER ══════════════ */}
      <HeroSlider />

      {/* ══════════════ OFFICIAL PORTALS STRIP ══════════════ */}
      <TrustLogos />

      {/* ══════════════ SERVICES RUNNING TICKER ══════════════ */}
      {/* <ServicesMarquee /> */}

      {/* ══════════════ 6 SPECIALIZED CATEGORIES ══════════════ */}
      <BrowseCategories />

      {/* ══════════════ FEATURED DAILY SERVICES (DOCS & WHATSAPP) ══════════════ */}
      {/* <ExploreServices /> */}

      {/* ══════════════ HOW IT WORKS (3 STEPS) ══════════════ */}
      <HowItWorks />

      {/* ══════════════ STATS COUNTER (NEW) ══════════════ */}
      <StatsCounter />

      {/* ══════════════ ABOUT THE DHARAMPUR CENTER & LAB ══════════════ */}
      <AboutPlatform />

      {/* ══════════════ UPCOMING EVENTS (NEW) ══════════════ */}
      <UpcomingEvents />

      {/* ══════════════ TESTIMONIALS (NEW) ══════════════ */}
      <Testimonials />

      {/* ══════════════ CITIZEN FREQUENTLY ASKED QUESTIONS ══════════════ */}
      <FAQ />

      {/* ══════════════ FINAL VISIT / CONNECT CTA ══════════════ */}
      <FinalCTA />

    </div>
  );
}
