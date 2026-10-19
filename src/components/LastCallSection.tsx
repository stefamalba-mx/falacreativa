import { ArrowRight, Linkedin, ShieldCheck, Calendar, Clock, CheckCircle } from 'lucide-react';
import { BOOKING_CALENDAR_URL, LINKEDIN_PROFILE_URL } from '../config';

export const LastCallSection: React.FC = () => {
  return (
    <section className="bg-[#0B0F19] text-white py-20 lg:py-28 relative overflow-hidden border-t border-slate-800">
      {/* Subtle ambient lighting */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[38rem] h-[22rem] bg-amber-600/10 rounded-full blur-3xl opacity-60"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        {/* Logo brand mark */}
        <div className="inline-block bg-white p-2.5 rounded-2xl shadow-xl border border-slate-700/60">
          <img
            src="./logo-fala-creativa.png"
            alt="Fala Creativa Socio Corporativo"
            className="h-9 w-auto object-contain"
          />
        </div>

        {/* Kicker */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold uppercase tracking-wider text-amber-400">
          <ShieldCheck className="w-4 h-4 text-amber-500" />
          <span>Alianza Estratégica & Confidencialidad</span>
        </div>

        {/* Closing Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight text-balance max-w-4xl mx-auto leading-tight">
          Lleva la comunicación y reputación de tu negocio{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
            al siguiente nivel
          </span>
        </h2>

        {/* Subtitle / Reinforcement */}
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed text-pretty">
          Agenda hoy una sesión estratégica preliminar con nuestro equipo directivo. Analizaremos tu posicionamiento actual, áreas de blindaje y oportunidades de valor compartido.
        </p>

        {/* CTA Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={BOOKING_CALENDAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-bold text-slate-950 bg-amber-500 hover:bg-amber-400 active:scale-[0.99] rounded-xl shadow-xl shadow-amber-500/20 hover:shadow-amber-500/30 transition-all cursor-pointer whitespace-nowrap group"
          >
            <Calendar className="w-4 h-4 text-slate-950" />
            <span>Agendar sesión estratégica</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href={LINKEDIN_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-semibold text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-all whitespace-nowrap group"
          >
            <Linkedin className="w-4 h-4 text-[#0077b5] group-hover:scale-110 transition-transform" />
            <span>Conectar con Estefanía Martínez Alba</span>
          </a>
        </div>

        {/* Guarantees */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-y-2 gap-x-8 text-xs text-slate-400">
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-amber-400" />
            <span>30 minutos de diagnóstico sin costo</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-amber-400" />
            <span>Respuesta en menos de 24 horas hábiles</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>Estricta confidencialidad corporativa</span>
          </div>
        </div>
      </div>
    </section>
  );
};
