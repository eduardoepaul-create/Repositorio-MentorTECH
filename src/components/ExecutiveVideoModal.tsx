import React, { useState, useEffect } from 'react';
import { X, Play, Pause, Volume2, VolumeX, CheckCircle, Clock } from 'lucide-react';

interface ExecutiveVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const ExecutiveVideoModal: React.FC<ExecutiveVideoModalProps> = ({
  isOpen,
  onClose,
  onOpenBooking,
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [currentChapter, setCurrentChapter] = useState(0);
  const [progress, setProgress] = useState(25);

  const chapters = [
    {
      id: 0,
      title: '01. La invisibilidad del 90%',
      desc: 'Por qué resolver tickets críticos no te garantiza un puesto de liderazgo.',
      timestamp: '00:00 - 03:15',
    },
    {
      id: 1,
      title: '02. El lenguaje del Directorio',
      desc: 'Cómo traducir latencias y servidores a EBITDA, riesgo y costo de oportunidad.',
      timestamp: '03:15 - 06:40',
    },
    {
      id: 2,
      title: '03. El Memo Ejecutivo de 1 Página',
      desc: 'La estructura exacta para presentar propuestas que se aprueban en 5 minutos.',
      timestamp: '06:40 - 09:50',
    },
    {
      id: 3,
      title: '04. El Caso Davis C. y Resultados',
      desc: 'De guardias 24/7 a líder estratégico de datos con reconocimiento directivo.',
      timestamp: '09:50 - 12:30',
    },
  ];

  // Simulated progress timer when playing
  useEffect(() => {
    if (!isOpen || !isPlaying) return;
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 0.5));
    }, 500);
    return () => clearInterval(interval);
  }, [isOpen, isPlaying]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-video-title"
    >
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800 bg-slate-950">
          <div>
            <h3 id="modal-video-title" className="text-white font-semibold text-base sm:text-lg">
              Masterclass MentorTech: De Experto Técnico a Líder Estratégico
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Metodología de Aceleración Ejecutiva para Especialistas TI
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-md transition-colors"
            aria-label="Cerrar video"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Canvas Simulation */}
        <div className="relative aspect-video w-full bg-black flex flex-col justify-between overflow-hidden">
          {/* Visual Presentation Slide Screen */}
          <div className="absolute inset-0 flex flex-col justify-center items-center p-8 sm:p-12 text-center bg-radial from-slate-900 via-slate-950 to-black">
            <div className="max-w-xl">
              <span className="text-blue-400 text-xs font-mono font-medium tracking-wider uppercase mb-2 block">
                {chapters[currentChapter].timestamp} · {chapters[currentChapter].title}
              </span>
              <h4 className="text-xl sm:text-2xl font-bold text-white mb-3">
                {chapters[currentChapter].desc}
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed hidden sm:block">
                "Los directores no compran tecnología por especificaciones; compran certeza, ahorro operativo y mitigación de riesgos catastróficos."
              </p>
            </div>
          </div>

          {/* Top Bar inside Video */}
          <div className="relative z-10 flex items-center justify-between p-4 bg-gradient-to-b from-black/80 to-transparent">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-medium text-slate-200">En reproducción</span>
            </div>
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="p-2 text-slate-300 hover:text-white bg-slate-800/60 rounded-md backdrop-blur-xs transition-colors"
              aria-label={isMuted ? 'Activar sonido' : 'Silenciar sonido'}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
          </div>

          {/* Bottom Bar Controls inside Video */}
          <div className="relative z-10 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
            {/* Progress bar */}
            <div className="w-full bg-slate-800 h-1.5 rounded-full mb-3 cursor-pointer overflow-hidden">
              <div
                className="bg-blue-500 h-full rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex items-center justify-between text-xs text-slate-300">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-1.5 text-white bg-blue-600 hover:bg-blue-500 rounded-sm transition-colors"
                  aria-label={isPlaying ? 'Pausar video' : 'Reproducir video'}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                </button>
                <span className="font-mono tabular-nums">04:12 / 12:30</span>
              </div>
              <span className="text-slate-400 hidden sm:inline">1080p Executive Feed</span>
            </div>
          </div>
        </div>

        {/* Chapters selection list */}
        <div className="p-4 sm:p-5 bg-slate-950 border-t border-slate-800">
          <div className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-3">
            Capítulos de la Masterclass
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
            {chapters.map((ch, idx) => (
              <button
                key={ch.id}
                onClick={() => {
                  setCurrentChapter(idx);
                  setProgress((idx / chapters.length) * 100);
                  setIsPlaying(true);
                }}
                className={`text-left p-2.5 rounded-md text-xs transition-colors border ${
                  currentChapter === idx
                    ? 'bg-slate-900 border-blue-500/80 text-white'
                    : 'bg-slate-900/40 border-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                }`}
              >
                <div className="font-semibold text-slate-200 mb-0.5">{ch.title}</div>
                <div className="text-[11px] text-slate-500 line-clamp-1">{ch.desc}</div>
              </button>
            ))}
          </div>

          {/* Action inside modal */}
          <div className="mt-4 pt-3 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Aplica de inmediato en tu trabajo actual sin necesidad de renunciar.</span>
            </div>
            <button
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="w-full sm:w-auto px-5 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-md transition-colors"
            >
              Agendar Diagnóstico Personalizado 1 a 1
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
