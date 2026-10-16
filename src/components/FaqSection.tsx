import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '../data/mentorTechData';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faqs" className="py-20 md:py-28 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-xs font-semibold tracking-wider text-slate-500 uppercase mb-3">
            Transparencia & Dudas Frecuentes
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4 text-balance">
            Preguntas Frecuentes sobre el Programa
          </h2>
          <p className="text-base text-slate-600 leading-relaxed font-normal">
            Todo lo que necesitas saber antes de tu sesión de diagnóstico 1 a 1.
          </p>
        </div>

        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {FAQS.map((faq, index) => {
            const isOpen = openIdx === index;
            return (
              <div key={index} className="py-5">
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : index)}
                  className="flex items-center justify-between w-full text-left gap-4 group cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 group-hover:text-slate-900 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-blue-600' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="mt-3 text-sm text-slate-600 leading-relaxed font-normal pr-8">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
