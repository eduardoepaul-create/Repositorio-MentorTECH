import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, RotateCcw, Award, AlertTriangle, ShieldCheck } from 'lucide-react';
import { QUIZ_QUESTIONS } from '../data/mentorTechData';

interface ExecutiveQuizProps {
  onOpenBookingWithScore?: (scoreText: string) => void;
}

export const ExecutiveQuiz: React.FC<ExecutiveQuizProps> = ({ onOpenBookingWithScore }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleNext = () => {
    if (selectedOption === null) return;
    const nextAnswers = [...answers, selectedOption];
    setAnswers(nextAnswers);
    setSelectedOption(null);

    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers([]);
    setSelectedOption(null);
    setIsCompleted(false);
  };

  // Score calculation
  const totalScore = answers.reduce((acc, curr) => acc + curr, 0);
  const maxScore = QUIZ_QUESTIONS.length * 3; // 12

  const getProfile = () => {
    if (totalScore <= 6) {
      return {
        level: 'Perfil 100% Operacional (Riesgo Crítico de Invisibilidad)',
        badgeColor: 'text-amber-700 bg-amber-50 border-amber-200',
        summary:
          'Tu esfuerzo técnico es enorme pero invisible para la gerencia general. Eres visto como un bombero indispensable que no puede ser promovido porque "quién arreglará los servidores".',
        urgency: 'Prioridad Alta: Requiere cambiar de inmediato la forma de reportar resultados a lenguaje de EBITDA y riesgo.',
      };
    } else if (totalScore <= 9) {
      return {
        level: 'Perfil de Transición Técnica (En Camino a la Estrategia)',
        badgeColor: 'text-blue-700 bg-blue-50 border-blue-200',
        summary:
          'Entiendes la importancia del negocio, pero aún defiendes tus iniciativas con argumentos técnicos que finanzas suele recortar o aplazar.',
        urgency: 'Prioridad Media: Con la plantilla de 1 página y simulación C-Level puedes desbloquear un ascenso senior en 8 semanas.',
      };
    } else {
      return {
        level: 'Líder Técnico Estratégico (Listo para C-Level / VP)',
        badgeColor: 'text-emerald-700 bg-emerald-50 border-emerald-200',
        summary:
          'Tienes visión comercial clara. Tu siguiente paso es el pulido de alta influencia, negociación de paquetes de compensación y consolidación de marca directiva.',
        urgency: 'Prioridad Inmediata: Negociación de título ejecutivo y presupuesto de escala.',
      };
    }
  };

  const profile = getProfile();

  return (
    <section id="diagnostico" className="py-20 md:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-xs font-semibold tracking-wider text-slate-500 uppercase mb-3">
            Herramienta Interactiva de Autoevaluación
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4 text-balance">
            Test de Madurez Estratégica TI
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Descubre en 2 minutos si tu forma de comunicar te mantiene estancado en la operación o te posiciona para un cargo de dirección ejecutiva.
          </p>
        </div>

        {/* Quiz Container Card */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-10 shadow-xs">
          {!isCompleted ? (
            <div>
              {/* Progress bar */}
              <div className="flex items-center justify-between text-xs text-slate-500 font-mono mb-3">
                <span>PREGUNTA {currentStep + 1} DE {QUIZ_QUESTIONS.length}</span>
                <span>{Math.round(((currentStep + 1) / QUIZ_QUESTIONS.length) * 100)}%</span>
              </div>
              <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden mb-8">
                <div
                  className="bg-blue-600 h-full transition-all duration-300"
                  style={{ width: `${((currentStep + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
                />
              </div>

              {/* Question */}
              <div className="mb-6">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 tracking-tight">
                  {QUIZ_QUESTIONS[currentStep].question}
                </h3>
                <p className="text-xs text-slate-500">
                  {QUIZ_QUESTIONS[currentStep].subtitle}
                </p>
              </div>

              {/* Options */}
              <div className="space-y-3 mb-8">
                {QUIZ_QUESTIONS[currentStep].options.map((opt, oIdx) => {
                  const isOptSelected = selectedOption === opt.score;
                  return (
                    <button
                      key={oIdx}
                      type="button"
                      onClick={() => setSelectedOption(opt.score)}
                      className={`w-full text-left p-4 sm:p-5 rounded-lg border transition-all ${
                        isOptSelected
                          ? 'bg-blue-50/60 border-blue-600 ring-1 ring-blue-600'
                          : 'bg-white hover:bg-slate-50 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-5 h-5 rounded-full border mt-0.5 flex items-center justify-center shrink-0 ${
                            isOptSelected
                              ? 'border-blue-600 bg-blue-600 text-white'
                              : 'border-slate-300 bg-white'
                          }`}
                        >
                          {isOptSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-slate-900 mb-1 leading-snug">
                            {opt.text}
                          </p>
                          <p className="text-xs text-slate-500 leading-relaxed font-normal">
                            {opt.description}
                          </p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Navigation button */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <span className="text-xs text-slate-400">
                  Selecciona la opción más honesta según tu realidad actual
                </span>
                <button
                  type="button"
                  disabled={selectedOption === null}
                  onClick={handleNext}
                  className={`inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold rounded-md transition-colors ${
                    selectedOption !== null
                      ? 'bg-slate-900 text-white hover:bg-slate-800 cursor-pointer shadow-xs'
                      : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                  }`}
                >
                  <span>{currentStep === QUIZ_QUESTIONS.length - 1 ? 'Ver Diagnóstico' : 'Siguiente'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            /* Results Screen */
            <div className="text-center sm:text-left space-y-6">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-slate-200">
                <div>
                  <div className="text-xs font-mono font-semibold text-blue-600 uppercase tracking-wider mb-1">
                    RESULTADO DE TU DIAGNÓSTICO
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    {profile.level}
                  </h3>
                </div>

                <div className="bg-slate-900 text-white px-5 py-3 rounded-lg text-center font-mono">
                  <div className="text-2xl font-bold">{totalScore} / {maxScore}</div>
                  <div className="text-[10px] text-slate-400 uppercase">Puntos Estratégicos</div>
                </div>
              </div>

              <div className="bg-slate-50 p-5 rounded-lg border border-slate-200 text-sm text-slate-700 leading-relaxed">
                <div className="font-semibold text-slate-900 mb-1">Evaluación de tu situación:</div>
                <p>{profile.summary}</p>
                <div className="mt-3 pt-3 border-t border-slate-200 text-xs font-semibold text-slate-900">
                  {profile.urgency}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-900 transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Repetir diagnóstico</span>
                </button>

                <button
                  onClick={() =>
                    onOpenBookingWithScore?.(
                      `Puntaje ${totalScore}/${maxScore} - ${profile.level}`
                    )
                  }
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors shadow-xs"
                >
                  <span>Revisar este resultado en mi Sesión 1 a 1</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
