import React from 'react';
import { AlertCircle, EyeOff, Layers, ArrowUpRight } from 'lucide-react';
import { MISTAKES } from '../data/mentorTechData';

interface MistakesSectionProps {
  onOpenBooking: () => void;
}

export const MistakesSection: React.FC<MistakesSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="errores" className="py-20 md:py-28 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs font-semibold tracking-wider text-slate-500 uppercase mb-3">
            Análisis de Barreras Profesionales
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4 text-balance">
            Los 3 Errores Críticos que Mantienen al 90% de los Especialistas en la Operación
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            El estancamiento laboral en TI casi nunca se debe a una falta de capacidad técnica, sino a hábitos operacionales que te vuelven indispensable apagando incendios e invisible para la alta dirección.
          </p>
        </div>

        {/* Mistakes Cards Grid (Clean hairline borders, no thick left accent strips) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MISTAKES.map((mistake) => (
            <div
              key={mistake.id}
              className="group flex flex-col justify-between bg-white border border-slate-200 hover:border-slate-300 rounded-lg p-6 sm:p-8 transition-colors duration-200 shadow-xs"
            >
              <div>
                {/* Index & Header */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100">
                  <span className="font-mono text-sm font-semibold text-slate-400">
                    {mistake.id}.
                  </span>
                  <span className="text-xs font-medium text-rose-700 bg-rose-50 px-2.5 py-1 rounded-sm">
                    Trampa común
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight mb-2">
                  {mistake.title}
                </h3>
                <p className="text-xs font-semibold text-slate-500 mb-4">
                  {mistake.subtitle}
                </p>

                {/* Trap Details */}
                <div className="space-y-4 text-sm leading-relaxed">
                  <div className="text-slate-700">
                    <span className="font-semibold text-slate-900 block text-xs uppercase tracking-wider mb-1">
                      El error habitual:
                    </span>
                    {mistake.trap}
                  </div>

                  <div className="bg-slate-50 p-3.5 rounded-md border border-slate-200/60 text-slate-600 text-xs leading-relaxed">
                    <span className="font-semibold text-slate-800 block mb-1">
                      Percepción del Directorio:
                    </span>
                    {mistake.perception}
                  </div>
                </div>
              </div>

              {/* Solution Preview */}
              <div className="pt-6 mt-6 border-t border-slate-100 text-xs">
                <span className="font-semibold text-blue-700 block uppercase tracking-wider mb-1">
                  Enfoque MentorTech:
                </span>
                <p className="text-slate-600 leading-relaxed font-normal">
                  {mistake.solution}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Diagnostic Callout */}
        <div className="mt-14 max-w-3xl mx-auto p-6 sm:p-8 bg-slate-900 text-white rounded-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold text-white tracking-tight">
              ¿Identificas al menos uno de estos patrones en tu día a día?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
              En la sesión de diagnóstico individual evaluamos exactamente en qué cuadrante de visibilidad estás y trazamos tu hoja de ruta.
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-6 py-3 text-xs font-semibold tracking-wide text-slate-900 bg-white hover:bg-slate-100 transition-colors rounded-md shadow-xs whitespace-nowrap shrink-0"
          >
            Evaluar Mi Caso en 30 Minutos
          </button>
        </div>
      </div>
    </section>
  );
};
