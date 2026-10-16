import React from 'react';
import { Check, X, ShieldAlert, Award } from 'lucide-react';
import { COMPARISON_ROWS } from '../data/mentorTechData';

interface ComparisonSectionProps {
  onOpenBooking: () => void;
}

export const ComparisonSection: React.FC<ComparisonSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="comparativa" className="py-20 md:py-28 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs font-semibold tracking-wider text-slate-500 uppercase mb-3">
            Análisis de Retorno de Inversión
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4 text-balance">
            Camino Tradicional vs. Acelerador MentorTech
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Por qué dos años de teoría académica y más insignias de certificación no solucionan la brecha ejecutiva entre tecnología y alta dirección.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse border border-slate-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-slate-900 text-white text-xs font-mono">
                <th className="p-4 sm:p-5 w-1/4 border-r border-slate-800 uppercase tracking-wider">
                  Criterio
                </th>
                <th className="p-4 sm:p-5 w-3/8 border-r border-slate-800 text-slate-300 uppercase tracking-wider">
                  Camino Tradicional (Maestrías / Certificados)
                </th>
                <th className="p-4 sm:p-5 w-3/8 text-blue-400 uppercase tracking-wider bg-slate-950">
                  Método MentorTech (Aceleración Ejecutiva)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-xs sm:text-sm">
              {COMPARISON_ROWS.map((row, idx) => (
                <tr
                  key={idx}
                  className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}
                >
                  <td className="p-4 sm:p-5 font-semibold text-slate-900 border-r border-slate-200 align-top">
                    {row.factor}
                  </td>
                  <td className="p-4 sm:p-5 text-slate-600 border-r border-slate-200 align-top leading-relaxed">
                    <div className="flex items-start gap-2">
                      <span className="text-rose-500 font-bold shrink-0 mt-0.5">✕</span>
                      <span>{row.traditional}</span>
                    </div>
                  </td>
                  <td className="p-4 sm:p-5 text-slate-900 font-medium bg-blue-50/30 align-top leading-relaxed">
                    <div className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold shrink-0 mt-0.5">✓</span>
                      <span>{row.mentorTech}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Action strip */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-500 mb-4">
            Evaluación selectiva previa a la admisión para garantizar el perfil del grupo.
          </p>
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center justify-center px-8 py-3.5 text-xs font-semibold tracking-wide text-white bg-slate-900 hover:bg-slate-800 transition-colors rounded-md shadow-xs"
          >
            Postular a la Próxima Cohorte (Cupos Limitados)
          </button>
        </div>
      </div>
    </section>
  );
};
