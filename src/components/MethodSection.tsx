import React, { useState } from 'react';
import { CheckCircle2, ChevronDown, ChevronRight, Sparkles, Layers, Shield, FileText } from 'lucide-react';
import { PILLARS } from '../data/mentorTechData';

interface MethodSectionProps {
  onOpenBooking: () => void;
}

export const MethodSection: React.FC<MethodSectionProps> = ({ onOpenBooking }) => {
  // Desktop active tab
  const [activePillarIndex, setActivePillarIndex] = useState(0);

  // Mobile open accordion indices (default Pilar 0 is open)
  const [mobileOpenIndex, setMobileOpenIndex] = useState<number | null>(0);

  const activePillar = PILLARS[activePillarIndex];

  const handleMobileToggle = (idx: number) => {
    setMobileOpenIndex(mobileOpenIndex === idx ? null : idx);
  };

  // Specimen preview box renderer
  const renderSpecimen = (idx: number) => {
    return (
      <div className="bg-slate-900 text-white rounded-lg p-5 border border-slate-800 space-y-3.5">
        <div className="flex items-center justify-between pb-2.5 border-b border-slate-800 text-[11px] font-mono text-slate-400">
          <span>PLANTILLA_EJECUTIVA</span>
          <span className="text-emerald-400">VERIFICADO</span>
        </div>

        {idx === 0 && (
          <div className="space-y-2.5 text-xs">
            <div className="text-slate-300 font-semibold">Matriz de Stakeholders Clave:</div>
            <div className="bg-slate-950 p-3 rounded-md border border-slate-800 space-y-2 text-[11px]">
              <div className="flex flex-col sm:flex-row sm:justify-between text-slate-400 gap-0.5">
                <span className="text-slate-300 font-medium">CFO / Finanzas:</span>
                <span className="text-blue-300">ROI y TCO de infraestructura</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between text-slate-400 gap-0.5">
                <span className="text-slate-300 font-medium">VP Comercial:</span>
                <span className="text-blue-300">Disponibilidad en picos de venta</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between text-slate-400 gap-0.5">
                <span className="text-slate-300 font-medium">CEO / Dirección:</span>
                <span className="text-blue-300">Mitigación de riesgo y reputación</span>
              </div>
            </div>
            <p className="text-[11px] text-slate-400 leading-snug">
              Aprende a hablarle a cada tomador de decisión según su dolor financiero específico.
            </p>
          </div>
        )}

        {idx === 1 && (
          <div className="space-y-2.5 text-xs">
            <div className="text-slate-300 font-semibold">Estructura del One-Page Executive Memo:</div>
            <div className="bg-slate-950 p-3 rounded-md border border-slate-800 space-y-1.5 font-mono text-[11px]">
              <div className="text-blue-400">1. Resumen Ejecutivo (3 líneas)</div>
              <div className="text-slate-400">2. Costo de la Inacción (Riesgo en $)</div>
              <div className="text-slate-400">3. Solución Técnica Simplificada</div>
              <div className="text-emerald-400">4. Retorno Financiero (Payback estimado)</div>
            </div>
            <p className="text-[11px] text-slate-400 leading-snug">
              Sustituye diapositivas técnicas de 40 páginas por un documento que se aprueba en 5 minutos.
            </p>
          </div>
        )}

        {idx === 2 && (
          <div className="space-y-2.5 text-xs">
            <div className="text-slate-300 font-semibold">Protocolo de Negociación C-Level:</div>
            <div className="bg-slate-950 p-3 rounded-md border border-slate-800 space-y-1.5 text-[11px]">
              <div className="text-slate-300 font-medium">Desarme de Objeción de Costos:</div>
              <p className="text-slate-400 italic bg-slate-900/60 p-2 rounded-sm border border-slate-800/80">
                "Entiendo el foco en contención de gasto, director. Analicemos si los $15k de hoy evitan una penalidad contractual de $120k en auditoría."
              </p>
            </div>
            <p className="text-[11px] text-slate-400 leading-snug">
              Simulaciones en vivo con directivos reales para ganar temple y templanza vocal.
            </p>
          </div>
        )}

        <button
          onClick={onOpenBooking}
          className="w-full mt-2 py-2 px-3 text-xs font-semibold text-center text-slate-900 bg-white hover:bg-slate-100 rounded-md transition-colors"
        >
          Solicitar Acceso al Programa
        </button>
      </div>
    );
  };

  return (
    <section id="metodo" className="py-16 md:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-16">
          <div className="text-xs font-semibold tracking-wider text-slate-500 uppercase mb-3">
            Arquitectura del Programa
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4 text-balance">
            El Método MentorTech: 3 Pilares de Transformación Ejecutiva
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Un marco estructurado de 8 semanas que no te enseña más código ni administración teórica, sino la habilidad pragmática de gobernar la mesa de decisiones directiva.
          </p>
        </div>

        {/* ==============================================================
            DISEÑO PARA MÓVILES (< md): ACORDEÓN INTEGRADO IN-PLACE
            Resuelve el problema del scroll: el detalle se abre directamente
            debajo de cada pilar sin saltos ni scroll forzado.
           ============================================================== */}
        <div className="md:hidden space-y-3.5">
          {PILLARS.map((pillar, idx) => {
            const isOpen = mobileOpenIndex === idx;
            return (
              <div
                key={pillar.id}
                className={`rounded-xl border transition-all overflow-hidden ${
                  isOpen
                    ? 'bg-white border-blue-600 shadow-md ring-1 ring-blue-600'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                {/* Header card button: expands details right in place */}
                <button
                  type="button"
                  onClick={() => handleMobileToggle(idx)}
                  className="w-full p-5 text-left flex items-start justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="space-y-1 pr-2">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-blue-600 uppercase">
                        Pilar {pillar.number}
                      </span>
                      <span className="text-[11px] text-slate-400 font-sans">·</span>
                      <span className="text-[11px] text-slate-500 font-medium">Semanas {idx === 0 ? '1-2' : idx === 1 ? '3-5' : '6-8'}</span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900 tracking-tight leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {pillar.description}
                    </p>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 mt-1 ${
                      isOpen
                        ? 'bg-blue-600 text-white rotate-180'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* In-Place Expanded Detail (No scroll jumping needed) */}
                {isOpen && (
                  <div className="px-5 pb-6 pt-2 border-t border-slate-100 space-y-5 bg-slate-50/50 animate-fadeIn">
                    {/* Deliverables */}
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5">
                        Entregables y Herramientas que Implementarás:
                      </h4>
                      <ul className="space-y-2.5">
                        {pillar.deliverables.map((item, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Impact result */}
                    <div className="p-3.5 bg-blue-50/80 rounded-lg border border-blue-100">
                      <span className="text-[11px] font-bold text-blue-900 uppercase tracking-wider block mb-0.5">
                        Impacto Inmediato:
                      </span>
                      <p className="text-xs text-blue-950 font-medium leading-relaxed">
                        {pillar.outcome}
                      </p>
                    </div>

                    {/* Specimen Box */}
                    {renderSpecimen(idx)}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ==============================================================
            DISEÑO PARA PC Y TABLET (>= md): WORKSPACE MULTICOLUMNA
           ============================================================== */}
        <div className="hidden md:block">
          {/* 3 Pillars Selector Cards */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {PILLARS.map((pillar, idx) => {
              const isSelected = activePillarIndex === idx;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActivePillarIndex(idx)}
                  className={`text-left p-6 rounded-lg transition-all border cursor-pointer ${
                    isSelected
                      ? 'bg-white border-blue-600 shadow-sm ring-1 ring-blue-600'
                      : 'bg-white/80 hover:bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`font-mono text-sm font-bold ${
                        isSelected ? 'text-blue-600' : 'text-slate-400'
                      }`}
                    >
                      Pilar {pillar.number}
                    </span>
                    {isSelected && (
                      <span className="text-xs font-medium text-blue-600 flex items-center gap-1">
                        Activo <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                    )}
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                    {pillar.description}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Detailed Pillar Workspace Preview */}
          <div className="bg-white border border-slate-200 rounded-xl p-8 sm:p-10 shadow-xs">
            <div className="grid grid-cols-12 gap-8 items-start">
              {/* Left Column: Deep Dive */}
              <div className="col-span-7 space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-blue-600 font-semibold tracking-wider uppercase mb-2">
                    <span>Módulo Profundo</span>
                    <span aria-hidden="true">·</span>
                    <span>Pilar {activePillar.number}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-3">
                    {activePillar.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    {activePillar.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                    Entregables y Herramientas que Implementarás:
                  </h4>
                  <ul className="space-y-3">
                    {activePillar.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-3 text-sm text-slate-700">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 bg-slate-50 rounded-lg border border-slate-200/80">
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-1">
                    Impacto Inmediato:
                  </span>
                  <p className="text-sm text-slate-700 font-medium">
                    {activePillar.outcome}
                  </p>
                </div>
              </div>

              {/* Right Column: Visual Blueprint / Specimen */}
              <div className="col-span-5">
                {renderSpecimen(activePillarIndex)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
