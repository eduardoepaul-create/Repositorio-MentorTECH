import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-200 border-b ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-slate-200 shadow-xs'
          : 'bg-white border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Brand Wordmark (Single text element) */}
          <a
            href="#"
            className="flex items-center gap-1.5 text-xl font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600 rounded-sm"
          >
            <span className="font-mono text-slate-400 font-normal group-hover:text-blue-600 transition-colors">&lt;</span>
            <span className="text-slate-900 tracking-tight">Mentor</span>
            <span className="text-blue-600 tracking-tight">Tech</span>
            <span className="font-mono text-slate-400 font-normal group-hover:text-blue-600 transition-colors">&gt;</span>
            <span className="text-xs text-blue-600 ml-0.5 font-sans font-medium">↗</span>
          </a>

          {/* Zone 2: Navigation Links (Single-line text with subtle hover) */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600" aria-label="Navegación principal">
            <a
              href="#agenda"
              className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:border-slate-900"
            >
              Agenda 1 a 1
            </a>
            <a
              href="#casos"
              className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:border-slate-900"
            >
              Casos de Éxito
            </a>
            <a
              href="#errores"
              className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:border-slate-900"
            >
              Errores Críticos
            </a>
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenBooking}
              className="hidden sm:inline-flex items-center justify-center px-4 py-2.5 text-xs font-semibold tracking-wide text-white bg-slate-900 hover:bg-slate-800 transition-colors rounded-md shadow-xs whitespace-nowrap shrink-0 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-900 cursor-pointer"
            >
              Agendar Diagnóstico 1 a 1
            </button>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2 text-sm font-medium text-slate-700">
            <a
              href="#agenda"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-50 transition-colors"
            >
              Agenda 1 a 1
            </a>
            <a
              href="#casos"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-50 transition-colors"
            >
              Casos de Éxito
            </a>
            <a
              href="#errores"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-50 transition-colors"
            >
              Errores Críticos
            </a>
          </nav>
          <div className="pt-2 border-t border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 text-center text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-md transition-colors"
            >
              Agendar Diagnóstico 1 a 1
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
