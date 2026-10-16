import React, { useState } from 'react';
import { Play, Star, Quote, ArrowRight, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/mentorTechData';

interface TestimonialsSectionProps {
  onOpenBooking: () => void;
  onOpenVideo: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  onOpenBooking,
  onOpenVideo,
}) => {
  const [selectedCase, setSelectedCase] = useState(TESTIMONIALS[0]);

  return (
    <section id="casos" className="py-20 md:py-28 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs font-semibold tracking-wider text-slate-500 uppercase mb-3">
            Evidencia & Casos de Estudio Reales
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4 text-balance">
            Casos de Éxito: De Especialistas Saturados a Líderes Estratégicos
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Historias comprobadas de profesionales de TI que transformaron su lenguaje corporativo, recuperaron sus fines de semana y lograron ascensos de alta dirección.
          </p>
        </div>

        {/* Featured Case: Davis C. Spotlight (High-End Redesigned Layout) */}
        <div className="mb-14 rounded-2xl bg-slate-900 text-white overflow-hidden border border-slate-800 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Left: Video & Media Anchor */}
            <div className="lg:col-span-5 relative bg-slate-950 p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-800">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-6">
                <span>CASO_DESTACADO</span>
                <span className="text-blue-400 font-semibold">DBA & DATA GOVERNANCE</span>
              </div>

              {/* Video Playable Trigger Card */}
              <div
                onClick={onOpenVideo}
                className="group relative aspect-video rounded-lg overflow-hidden bg-slate-900 border border-slate-700/80 cursor-pointer flex items-center justify-center transition-all hover:border-blue-500/80"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/60 to-transparent" />

                {/* Abstract geometric vector visual */}
                <div className="absolute inset-0 opacity-20 pointer-events-none flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full border border-blue-500/30 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full border border-blue-400/20" />
                  </div>
                </div>

                <div className="relative z-10 flex flex-col items-center text-center p-4">
                  <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform mb-2">
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </div>
                  <span className="text-xs font-medium text-slate-200">
                    Ver entrevista con Davis C.
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono mt-0.5">
                    Duración: 3:45 min
                  </span>
                </div>
              </div>

              {/* Author badge footer in left column */}
              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 font-bold flex items-center justify-center font-mono text-sm shrink-0">
                  DC
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">Davis C.</div>
                  <div className="text-xs text-slate-400">Especialista DBA & Gestión de Base de Datos</div>
                </div>
              </div>
            </div>

            {/* Right: Detailed Story & Quote */}
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
              <div>
                {/* 5-star indicator & unboxed tags */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                  <div className="flex items-center text-amber-400 gap-1" aria-label="Calificación 5 de 5 estrellas">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                    <span>-60% Guardias</span>
                    <span aria-hidden="true">·</span>
                    <span>Transición Senior</span>
                  </div>
                </div>

                <blockquote className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal mb-6 italic">
                  "{TESTIMONIALS[0].quote}"
                </blockquote>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-slate-800 text-xs">
                  <div>
                    <span className="text-slate-400 block mb-1">Situación inicial:</span>
                    <p className="text-slate-300 font-medium">{TESTIMONIALS[0].previousRole}</p>
                  </div>
                  <div>
                    <span className="text-blue-400 block mb-1">Resultado verificado:</span>
                    <p className="text-white font-medium">{TESTIMONIALS[0].achievement}</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-slate-400">
                  Mentoría personalizada enfocada en el caso real de su compañía.
                </span>
                <button
                  onClick={onOpenBooking}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-900 bg-white hover:bg-slate-100 rounded-md transition-colors whitespace-nowrap"
                >
                  <span>Quiero resultados como Davis</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Executive Testimonial Cards (Elena R. & Marco V.) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.slice(1).map((item) => (
            <div
              key={item.id}
              className="bg-slate-50 border border-slate-200 hover:border-slate-300 rounded-xl p-6 sm:p-8 flex flex-col justify-between transition-colors shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-200">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <div className="text-xs text-slate-500 font-medium">
                    {item.metricHighlight}
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-900 text-white font-bold flex items-center justify-center text-xs font-mono shrink-0">
                    {item.avatarInitials}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">{item.name}</h3>
                    <p className="text-xs text-slate-600">{item.role}</p>
                  </div>
                </div>

                <button
                  onClick={onOpenVideo}
                  className="p-2 text-slate-400 hover:text-blue-600 transition-colors"
                  aria-label={`Ver video de ${item.name}`}
                >
                  <Play className="w-4 h-4 fill-current" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
