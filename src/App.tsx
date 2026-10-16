/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MistakesSection } from './components/MistakesSection';
import { MethodSection } from './components/MethodSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ExecutiveQuiz } from './components/ExecutiveQuiz';
import { ComparisonSection } from './components/ComparisonSection';
import { BookingSection } from './components/BookingSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { ExecutiveVideoModal } from './components/ExecutiveVideoModal';

export default function App() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [initialChallengeNote, setInitialChallengeNote] = useState('');

  const scrollToBooking = (note?: string) => {
    if (note) {
      setInitialChallengeNote(note);
    }
    const element = document.getElementById('agenda');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-slate-900 selection:text-white">
      {/* 3-Zone Executive Navbar */}
      <Navbar onOpenBooking={() => scrollToBooking()} />

      {/* Main Content Flow: Proposition -> Mechanism -> Proof -> Action */}
      <main className="flex-1">
        {/* Hero Section with unboxed metadata and video trigger */}
        <Hero
          onOpenBooking={() => scrollToBooking()}
          onOpenVideo={() => setIsVideoModalOpen(true)}
        />

        {/* The 3 Critical Career Traps */}
        <MistakesSection onOpenBooking={() => scrollToBooking()} />

        {/* The 3 Pillars of MentorTech Method */}
        <MethodSection onOpenBooking={() => scrollToBooking()} />

        {/* Real Testimonial Case Studies (Davis C., Elena R., Marco V.) */}
        <TestimonialsSection
          onOpenBooking={() => scrollToBooking()}
          onOpenVideo={() => setIsVideoModalOpen(true)}
        />

        {/* Interactive Self-Assessment Quiz */}
        <ExecutiveQuiz
          onOpenBookingWithScore={(scoreText) => scrollToBooking(scoreText)}
        />

        {/* Traditional Academic Path vs MentorTech */}
        <ComparisonSection onOpenBooking={() => scrollToBooking()} />

        {/* Interactive 1-on-1 Diagnostic Booking Scheduler */}
        <BookingSection initialChallengeNote={initialChallengeNote} />

        {/* Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* Quiet Corporate Footer */}
      <Footer />

      {/* Interactive Masterclass Video Modal */}
      <ExecutiveVideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        onOpenBooking={() => scrollToBooking()}
      />
    </div>
  );
}
