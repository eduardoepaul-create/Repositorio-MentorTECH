import React, { useState } from 'react';
import { Calendar, Clock, Video, CheckCircle2, ShieldCheck, User, Mail, Briefcase, FileCheck, ArrowRight, Download } from 'lucide-react';

interface BookingSectionProps {
  initialChallengeNote?: string;
}

export const BookingSection: React.FC<BookingSectionProps> = ({ initialChallengeNote = '' }) => {
  const [selectedDate, setSelectedDate] = useState('2026-10-20');
  const [selectedSlot, setSelectedSlot] = useState('10:30 AM');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    yearsExp: '5-8 años',
    challenge: initialChallengeNote || '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [validationError, setValidationError] = useState('');

  // Available dates (Business days)
  const availableDates = [
    { label: 'Lun, 20 Oct', value: '2026-10-20', spots: '2 libres' },
    { label: 'Mar, 21 Oct', value: '2026-10-21', spots: '3 libres' },
    { label: 'Mié, 22 Oct', value: '2026-10-22', spots: '1 libre' },
    { label: 'Jue, 23 Oct', value: '2026-10-23', spots: '2 libres' },
  ];

  const timeSlots = [
    '09:00 AM',
    '10:30 AM',
    '02:00 PM',
    '04:30 PM',
    '06:00 PM',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.role.trim()) {
      setValidationError('Por favor completa todos los campos obligatorios para preparar tu sesión.');
      return;
    }
    if (!formData.email.includes('@')) {
      setValidationError('Por favor ingresa un correo electrónico válido.');
      return;
    }
    setValidationError('');
    setIsSubmitted(true);
  };

  const handleDownloadCalendar = () => {
    // Generate simple .ics calendar file
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//MentorTech//Diagnostico Ejecutivo//ES
BEGIN:VEVENT
SUMMARY:Sesión de Diagnóstico Ejecutivo 1 a 1 | MentorTech
DESCRIPTION:Sesión privada de 30 minutos para evaluar tu brecha de liderazgo TI y hoja de ruta estratégica.
DTSTART:20261020T103000Z
DTEND:20261020T110000Z
LOCATION:Google Meet (Enlace en tu confirmación)
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'MentorTech-Diagnostico-1a1.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="agenda" className="py-20 md:py-28 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs font-mono font-semibold tracking-wider text-blue-400 uppercase mb-3">
            CONVOCATORIA SELECTIVA · COHORTE 2026
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-4 text-balance">
            Agendar Sesión de Diagnóstico Estratégico 1 a 1
          </h2>
          <p className="text-base text-slate-300 leading-relaxed font-normal">
            Una sesión confidencial de 30 minutos sin costo para auditar tu visibilidad corporativa, identificar qué está bloqueando tu ascenso y entregarte un plan táctico.
          </p>
        </div>

        {/* Booking Card */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-2xl">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Step 1: Select Date & Slot */}
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400 uppercase tracking-wider mb-4">
                  <span className="text-blue-400 font-bold">PASO 1</span>
                  <span>·</span>
                  <span>SELECCIONA FECHA Y HORARIO (ZONA HORARIA LOCAL)</span>
                </div>

                {/* Dates */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                  {availableDates.map((d) => (
                    <button
                      key={d.value}
                      type="button"
                      onClick={() => setSelectedDate(d.value)}
                      className={`p-3 rounded-lg border text-left transition-all ${
                        selectedDate === d.value
                          ? 'bg-blue-600/15 border-blue-500 text-white'
                          : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-900'
                      }`}
                    >
                      <div className="font-semibold text-xs sm:text-sm text-slate-200">{d.label}</div>
                      <div className="text-[11px] text-blue-400 font-mono mt-0.5">{d.spots}</div>
                    </button>
                  ))}
                </div>

                {/* Timeslots */}
                <div className="flex flex-wrap gap-2.5">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedSlot(slot)}
                      className={`px-4 py-2 rounded-md border text-xs font-mono transition-colors ${
                        selectedSlot === slot
                          ? 'bg-blue-600 border-blue-500 text-white font-bold'
                          : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Information Fields */}
              <div className="pt-6 border-t border-slate-800">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400 uppercase tracking-wider mb-4">
                  <span className="text-blue-400 font-bold">PASO 2</span>
                  <span>·</span>
                  <span>DATOS DE TU PERFIL PROFESIONAL</span>
                </div>

                {validationError && (
                  <div className="p-3 bg-rose-950/60 border border-rose-800 rounded-md text-xs text-rose-300 mb-4">
                    {validationError}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Carlos Mendoza"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-800 rounded-md px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-hidden focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Correo corporativo o personal *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Ej. carlos.mendoza@empresa.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-800 rounded-md px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-hidden focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Cargo actual en TI *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Administrador DBA / Tech Lead / SRE"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-800 rounded-md px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-hidden focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Años de experiencia técnica
                    </label>
                    <select
                      value={formData.yearsExp}
                      onChange={(e) => setFormData({ ...formData, yearsExp: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-800 rounded-md px-3.5 py-2.5 text-sm text-white focus:outline-hidden focus:border-blue-500 transition-colors"
                    >
                      <option value="3-5 años">3 a 5 años</option>
                      <option value="5-8 años">5 a 8 años</option>
                      <option value="8-12 años">8 a 12 años</option>
                      <option value="+12 años">+12 años de trayectoria</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    ¿Cuál es el mayor obstáculo para tu ascenso en este momento?
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Ej. Me ven como el técnico de soporte de guardia y no me involucran en las reuniones donde se define el presupuesto..."
                    value={formData.challenge}
                    onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-800 rounded-md p-3 text-sm text-white placeholder-slate-500 focus:outline-hidden focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>100% Confidencial. Sin spam ni venta agresiva.</span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-md transition-colors shadow-lg shadow-blue-600/30 whitespace-nowrap"
                >
                  <span>Confirmar Agendamiento 1 a 1</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          ) : (
            /* Submission Confirmation State */
            <div className="text-center py-6 space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block mb-1">
                  SESIÓN RESERVADA CON ÉXITO
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  ¡Excelente, {formData.name}! Tu diagnóstico está confirmado.
                </h3>
                <p className="text-sm text-slate-300 max-w-lg mx-auto mt-2 leading-relaxed">
                  Hemos reservado tu espacio exclusivo de 30 minutos. Te enviamos los detalles de acceso a tu correo <strong className="text-white">{formData.email}</strong>.
                </p>
              </div>

              {/* Session summary box */}
              <div className="bg-slate-900 border border-slate-800 rounded-lg p-5 max-w-md mx-auto text-left space-y-2 text-xs font-mono">
                <div className="flex justify-between text-slate-400">
                  <span>Fecha:</span>
                  <span className="text-white font-medium">{selectedDate}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Horario:</span>
                  <span className="text-white font-medium">{selectedSlot}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Plataforma:</span>
                  <span className="text-blue-400 font-medium">Google Meet Privado</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Mentor Asignado:</span>
                  <span className="text-white font-medium">Líder TI C-Level</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  onClick={handleDownloadCalendar}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-semibold text-slate-900 bg-white hover:bg-slate-100 rounded-md transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span>Añadir a mi Calendario (.ics)</span>
                </button>

                <button
                  onClick={() => setIsSubmitted(false)}
                  className="w-full sm:w-auto px-6 py-2.5 text-xs font-medium text-slate-400 hover:text-white transition-colors"
                >
                  Modificar datos de reserva
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
