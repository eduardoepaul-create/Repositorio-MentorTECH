import React, { useState } from 'react';
import { Calendar, Clock, Video, Mail, CheckCircle2, ShieldCheck, ExternalLink, Sparkles } from 'lucide-react';

interface BookingSectionProps {
  initialChallengeNote?: string;
}

export const BookingSection: React.FC<BookingSectionProps> = ({ initialChallengeNote = '' }) => {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const calendlyUrl = 'https://calendly.com/it-mentor-tech/30min?hide_landing_page_details=1&hide_gdpr_banner=1';

  return (
    <section
      id="agenda"
      style={{ backgroundColor: '#fbfbfc' }}
      className="py-20 md:py-28 text-slate-900 border-b border-slate-200"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="text-xs font-mono font-semibold tracking-wider text-blue-600 uppercase mb-3">
            SISTEMA OFICIAL DE RESERVAS · MENTORÍA 1 A 1
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4 text-balance">
            Agenda tu Sesión de Diagnóstico Estratégico
          </h2>
          <p className="text-base text-slate-600 leading-relaxed font-normal">
            Elige el horario que mejor se adapte a tu agenda. Al confirmar tu reserva recibirás un correo electrónico automático con los datos de acceso y la invitación a Google Meet.
          </p>
        </div>

        {/* Highlight Trust Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-white border border-slate-200 shadow-xs rounded-lg p-4 flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-900">Confirmación por Correo</div>
              <div className="text-[11px] text-slate-500">Envío instantáneo a tu email</div>
            </div>
          </div>

          <div className="bg-white border border-slate-200 shadow-xs rounded-lg p-4 flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <Video className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-900">Google Meet Privado</div>
              <div className="text-[11px] text-slate-500">Enlace de videollamada incluido</div>
            </div>
          </div>

          <div className="bg-white border border-slate-200 shadow-xs rounded-lg p-4 flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-900">30 Minutos Personalizados</div>
              <div className="text-[11px] text-slate-500">Evaluación de perfil y salario</div>
            </div>
          </div>
        </div>

        {/* Note if completed the diagnostic test */}
        {initialChallengeNote && (
          <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg flex items-start gap-3 text-xs text-blue-900">
            <Sparkles className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-blue-950 block mb-0.5">Diagnóstico Previo Registrado:</span>
              <span>{initialChallengeNote}. Te recomendamos mencionarlo durante los primeros 5 minutos de la sesión.</span>
            </div>
          </div>
        )}

        {/* Calendly Embed Container */}
        <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl border border-slate-200 min-h-[1000px]">
          {/* Loading state indicator while iframe loads */}
          {!iframeLoaded && (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-slate-50 text-slate-600">
              <div className="w-10 h-10 border-3 border-blue-600 border-t-transparent rounded-full animate-spin mb-4" />
              <div className="text-sm font-medium text-slate-800">Cargando calendario oficial de MentorTech...</div>
              <div className="text-xs text-slate-500 mt-1">Sincronizando zonas horarias disponibles</div>
            </div>
          )}

          {/* Embedded Calendly iframe */}
          <iframe
            src={calendlyUrl}
            width="100%"
            height="1000"
            frameBorder="0"
            title="Calendly - MentorTech Sesión de Diagnóstico 1 a 1"
            className="w-full h-[1000px] bg-white"
            style={{ height: '1000px' }}
            onLoad={() => setIframeLoaded(true)}
          />
        </div>

        {/* Footer help & alternative direct button */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Tus datos son 100% confidenciales. Política de cero spam.</span>
          </div>

          <a
            href="https://calendly.com/it-mentor-tech/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-700 underline underline-offset-2 transition-colors font-medium"
          >
            <span>Abrir agenda en ventana completa</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
