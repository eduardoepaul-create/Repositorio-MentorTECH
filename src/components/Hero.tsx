import { Play, ArrowRight, Clock } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenVideo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onOpenVideo }) => {
  return (
    <section className="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-white border-b border-slate-200">
      {/* Subtle architectural background pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(#0f172a 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Unboxed clean metadata kicker (No static pill boxes) */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-semibold tracking-wider text-slate-600 mb-6 uppercase">
          <span>Programa de Aceleración Ejecutiva TI</span>
          <span className="text-slate-300 font-normal" aria-hidden="true">·</span>
          <span>Especialistas, Arquitectos y Tech Leads</span>
          <span className="text-slate-300 font-normal" aria-hidden="true">·</span>
          <span>Mentoría 1 a 1 con Líderes C-Level</span>
        </div>

        {/* Hero Title */}
        <div className="text-center max-w-4xl mx-auto mb-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-slate-900 tracking-tight leading-[1.15] text-balance">
            De Experto Técnico a <span className="text-blue-600">Líder Estratégico</span> en tu Organización
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-center text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
          Aprende a comunicar el valor de tus proyectos en métricas de negocio, erradicar la invisibilidad operacional y negociar ascensos senior sin pagar maestrías costosas de dos años.
        </p>

        {/* Interactive Masterclass Preview Card (Replacing generic placeholder) */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative group rounded-xl overflow-hidden bg-slate-950 border border-slate-800 shadow-xl shadow-slate-950/10">
            {/* Aspect ratio 16:9 container */}
            <div className="relative aspect-video w-full flex items-center justify-center bg-radial from-slate-900 via-slate-950 to-black p-6 sm:p-10">
              {/* Technical grid backdrop graphic */}
              <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                  backgroundImage: `linear-gradient(to right, #334155 1px, transparent 1px), linear-gradient(to bottom, #334155 1px, transparent 1px)`,
                  backgroundSize: '40px 40px',
                }}
              />

              {/* Graphic watermark/visual preview layout */}
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent pointer-events-none" />

              {/* Central Trigger Action */}
              <div className="relative z-10 flex flex-col items-center text-center max-w-lg">
                <button
                  onClick={onOpenVideo}
                  aria-label="Reproducir video de presentación de MentorTech"
                  className="w-18 h-18 sm:w-20 sm:h-20 rounded-full bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center shadow-lg shadow-blue-600/30 transition-transform duration-200 group-hover:scale-105 mb-4 focus:outline-hidden focus-visible:ring-4 focus-visible:ring-blue-400"
                >
                  <Play className="w-8 h-8 fill-current ml-1 text-white" />
                </button>

                <div className="text-white font-semibold text-lg sm:text-xl mb-1.5 tracking-tight">
                  Masterclass Ejecutiva: El Marco de los 3 Pilares
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400">
                  <span>Presentado por Mentores C-Level</span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    12 min de contenido táctico
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="text-blue-400 font-medium">100% libre de relleno</span>
                </div>
              </div>

              {/* Live Preview Overlays */}
              <div className="absolute top-4 left-4 z-10 hidden sm:flex items-center gap-2 text-xs font-mono text-slate-300 bg-slate-900/90 border border-slate-700/80 px-3 py-1.5 rounded-sm backdrop-blur-xs">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                <span>CASO_ESTUDIO: Transición TI &gt; Negocio</span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 z-10 hidden md:flex items-center justify-between text-xs text-slate-400 pt-3 border-t border-slate-800/80">
                <div className="flex items-center gap-4">
                  <span>Capítulo 1: La trampa técnica</span>
                  <span className="text-slate-600">/</span>
                  <span>Capítulo 2: El memorándum de 1 página</span>
                  <span className="text-slate-600">/</span>
                  <span>Capítulo 3: Caso Davis C.</span>
                </div>
                <span className="text-slate-300 font-mono">VSL-HD</span>
              </div>
            </div>
          </div>
        </div>

        {/* Primary CTA Block */}
        <div className="flex flex-col items-center justify-center text-center">
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 transition-all rounded-md shadow-md shadow-blue-600/20 whitespace-nowrap focus:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600"
            >
              <span>Agendar Sesión de Diagnóstico 1 a 1</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#casos"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 hover:border-slate-400 transition-colors rounded-md whitespace-nowrap"
            >
              <span>Ver Casos de Éxito</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
