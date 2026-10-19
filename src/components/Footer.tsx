import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 md:py-16 border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-slate-900">
          <div>
            <a href="#" className="flex items-center gap-1.5 text-lg font-bold text-white tracking-tight">
              <span className="font-mono text-slate-500 font-normal">&lt;</span>
              <span>Mentor</span>
              <span className="text-blue-500">Tech</span>
              <span className="font-mono text-slate-500 font-normal">&gt;</span>
              <span className="text-xs text-blue-500 ml-0.5 font-sans font-medium">↗</span>
            </a>
            <p className="text-xs text-slate-500 mt-2 max-w-sm leading-relaxed">
              Programa de aceleración ejecutiva para ingenieros y especialistas técnicos de TI. De la operación al liderazgo estratégico.
            </p>
          </div>

          <div className="flex flex-wrap gap-8 text-xs font-medium text-slate-400">
            <a href="#agenda" className="hover:text-white transition-colors">
              Agendar Sesión 1 a 1
            </a>
            <a href="#casos" className="hover:text-white transition-colors">
              Casos de Éxito
            </a>
            <a href="#errores" className="hover:text-white transition-colors">
              Errores Críticos
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <p>© {new Date().getFullYear()} MentorTech Accelerator. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <span>Privacidad y Confidencialidad</span>
            <span aria-hidden="true">·</span>
            <span>Términos del Servicio</span>
            <span aria-hidden="true">·</span>
            <span>contacto@mentortech.lat</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
