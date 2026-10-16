import React, { useState } from 'react';
import { CheckCircle2, ChevronRight, FileText, Users, Award, Shield } from 'lucide-react';
import { PILLARS } from '../data/mentorTechData';

interface MethodSectionProps {
  onOpenBooking: () => void;
}

export const MethodSection: React.FC<MethodSectionProps> = ({ onOpenBooking }) => {
  const [activePillarIndex, setActivePillarIndex] = useState(0);
  const activePillar = PILLARS[activePillarIndex];

  return (
    <section id="metodo" className="py-20 md:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
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

        {/* 3 Pillars Selector Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {PILLARS.map((pillar, idx) => {
            const isSelected = activePillarIndex === idx;
            return (
              <button
                key={pillar.id}
                onClick={() => setActivePillarIndex(idx)}
                className={`text-left p-6 rounded-lg transition-all border ${
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
        <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Deep Dive */}
            <div className="lg:col-span-7 space-y-6">
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
            <div className="lg:col-span-5 bg-slate-900 text-white rounded-lg p-6 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs font-mono text-slate-400">
                <span>PLANTILLA_EJECUTIVA</span>
                <span className="text-emerald-400">VERIFICADO</span>
              </div>

              {activePillarIndex === 0 && (
                <div className="space-y-3 text-xs">
                  <div className="text-slate-300 font-medium">Matriz de Stakeholders Clave:</div>
                  <div className="bg-slate-950 p-3 rounded-sm border border-slate-800 space-y-2">
                    <div className="flex justify-between text-slate-400">
                      <span>CFO / Finanzas:</span>
                      <span className="text-slate-200">ROI y TCO de infraestructura</span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>VP Comercial:</span>
                      <span className="text-slate-200">Disponibilidad en picos de venta</span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>CEO / Dirección:</span>
                      <span className="text-slate-200">Mitigación de riesgo y reputación</span>
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Aprende a hablarle a cada tomador de decisión según su dolor específico.
                  </p>
                </div>
              )}

              {activePillarIndex === 1 && (
                <div className="space-y-3 text-xs">
                  <div className="text-slate-300 font-medium">Estructura del One-Page Executive Memo:</div>
                  <div className="bg-slate-950 p-3 rounded-sm border border-slate-800 space-y-2 font-mono text-[11px]">
                    <div className="text-blue-400">1. Resumen Ejecutivo (3 líneas)</div>
                    <div className="text-slate-400">2. Costo de la Inacción (Riesgo en $)</div>
                    <div className="text-slate-400">3. Solución Técnica Simplificada</div>
                    <div className="text-emerald-400">4. Retorno Financiero (Payback estimado)</div>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Sustituye diapositivas técnicas de 40 páginas por un documento que se aprueba en 5 minutos.
                  </p>
                </div>
              )}

              {activePillarIndex === 2 && (
                <div className="space-y-3 text-xs">
                  <div className="text-slate-300 font-medium">Protocolo de Negociación C-Level:</div>
                  <div className="bg-slate-950 p-3 rounded-sm border border-slate-800 space-y-2">
                    <div className="text-slate-300 font-semibold">Desarme de Objeción de Costos:</div>
                    <p className="text-slate-400 text-[11px] italic">
                      "Entiendo el foco en contención de gasto, director. Analicemos si los $15k de hoy evitan una penalidad contractual de $120k en auditoría."
                    </p>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Simulación con directivos reales para ganar temple y templanza vocal.
                  </p>
                </div>
              )}

              <button
                onClick={onOpenBooking}
                className="w-full mt-4 py-2.5 px-4 text-xs font-semibold text-center text-slate-900 bg-white hover:bg-slate-100 rounded-md transition-colors"
              >
                Solicitar Acceso al Programa
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
