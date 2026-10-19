/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BookingSection } from './components/BookingSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { MistakesSection } from './components/MistakesSection';
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
      {/* 1. Barra de Navegación Superior */}
      <Navbar onOpenBooking={() => scrollToBooking()} />

      {/* Main Content Flow reestructurado */}
      <main className="flex-1">
        {/* 2. Cabecera Principal (Hero) */}
        <Hero
          onOpenBooking={() => scrollToBooking()}
          onOpenVideo={() => setIsVideoModalOpen(true)}
        />

        {/* Punto 9 en la posición donde estaba el punto 4: Agenda y Calendario 1 a 1 */}
        <BookingSection initialChallengeNote={initialChallengeNote} />

        {/* Punto 6 en la posición 5: Casos de Éxito de Egresados */}
        <TestimonialsSection
          onOpenBooking={() => scrollToBooking()}
          onOpenVideo={() => setIsVideoModalOpen(true)}
        />

        {/* Punto 4: Los 3 Errores Críticos que Frenan tu Carrera TI */}
        <MistakesSection onOpenBooking={() => scrollToBooking()} />
      </main>

      {/* 11. Pie de Página */}
      <Footer />

      {/* 3. Reproductor Modal de la Masterclass VSL */}
      <ExecutiveVideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        onOpenBooking={() => scrollToBooking()}
      />
    </div>
  );
}
