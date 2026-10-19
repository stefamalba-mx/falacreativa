import React, { useState } from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Mic, 
  HeartHandshake, 
  Linkedin, 
  Globe, 
  TrendingUp, 
  CheckCircle,
  Building,
  Award,
  Sparkles
} from 'lucide-react';
import { BOOKING_CALENDAR_URL, LINKEDIN_PROFILE_URL } from '../config';

export const HeroSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'reputacion' | 'voceria' | 'sostenibilidad'>('reputacion');

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-100">
      {/* Subtle autumn ambient backdrop accents */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-24 right-0 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl opacity-70"
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/2 -left-32 w-80 h-80 bg-slate-200/40 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main 2-column split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Subtitle, CTA */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Clean kicker (zero-pill discipline) */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-700 uppercase">
              <span className="inline-block w-2 h-2 rounded-sm bg-amber-600" />
              <span>Consultoría de Alto Nivel</span>
              <span aria-hidden="true" className="text-slate-300">/</span>
              <span>Alcance Internacional</span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15] text-balance">
              Fala Creativa es tu socio corporativo para llevar tu negocio{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800">
                al siguiente nivel
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl text-pretty">
              Consultoría estratégica y visión internacional en comunicación corporativa, relaciones públicas y valor compartido. Blindamos tu reputación e impulsamos el crecimiento sostenible.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={BOOKING_CALENDAR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-7 py-4 text-sm font-bold text-white bg-amber-600 hover:bg-amber-700 active:scale-[0.99] rounded-xl shadow-lg shadow-amber-600/25 hover:shadow-amber-600/35 transition-all whitespace-nowrap cursor-pointer group"
              >
                <span>Agendar sesión estratégica</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={LINKEDIN_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200/90 rounded-xl shadow-sm transition-all whitespace-nowrap group"
              >
                <Linkedin className="w-4 h-4 text-[#0077b5] group-hover:scale-110 transition-transform" />
                <span>Perfil de Estefanía Martínez Alba</span>
              </a>
            </div>

            {/* Quiet trust markers */}
            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>Sesión confidencial 1-a-1</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>Enfoque en ROI reputacional</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>Metodología probada en Iberoamérica</span>
              </div>
            </div>
          </div>

          {/* Right Column: Elegant Corporate Leadership Mockup / Visual Container */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-6 sm:p-7 text-white shadow-2xl border border-slate-800">
              {/* Header inside mockup */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="bg-white p-1 rounded-xl shadow-sm border border-slate-700/80 shrink-0">
                    <img
                      src="./logo-fala-creativa.png"
                      alt="Fala Creativa"
                      className="h-9 w-auto object-contain"
                    />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-white tracking-tight">
                      Modelo Fala 360°
                    </h2>
                    <span className="text-[11px] text-slate-400">
                      Arquitectura de Reputación & CSV
                    </span>
                  </div>
                </div>

                {/* Interactive pill/tab control for executive preview */}
                <div className="flex p-0.5 bg-slate-800/80 rounded-lg text-[10px] font-medium border border-slate-700/60">
                  <button
                    onClick={() => setActiveTab('reputacion')}
                    className={`px-2 py-1 rounded-md transition-colors cursor-pointer ${
                      activeTab === 'reputacion' ? 'bg-amber-600 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    RRPP
                  </button>
                  <button
                    onClick={() => setActiveTab('voceria')}
                    className={`px-2 py-1 rounded-md transition-colors cursor-pointer ${
                      activeTab === 'voceria' ? 'bg-amber-600 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Vocería
                  </button>
                  <button
                    onClick={() => setActiveTab('sostenibilidad')}
                    className={`px-2 py-1 rounded-md transition-colors cursor-pointer ${
                      activeTab === 'sostenibilidad' ? 'bg-amber-600 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    CSV
                  </button>
                </div>
              </div>

              {/* Dynamic Content Card within Mockup */}
              <div className="py-5 space-y-4">
                {activeTab === 'reputacion' && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-400">Posicionamiento & Cobertura Tier 1</span>
                      <span className="text-amber-400 font-mono font-bold">+180% Tier 1</span>
                    </div>
                    {/* Visual bar */}
                    <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-amber-500 to-amber-600 rounded-full w-[88%]" />
                    </div>
                    <div className="p-3 bg-slate-800/50 rounded-xl border border-slate-800 text-xs text-slate-300 leading-relaxed">
                      Estrategia de medios selectivos, blindaje contra fake news y relaciones con líderes de opinión en España y Latinoamérica.
                    </div>
                  </div>
                )}

                {activeTab === 'voceria' && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-400">Efectividad de Mensaje Ejecutivo</span>
                      <span className="text-amber-400 font-mono font-bold">96/100 Impacto</span>
                    </div>
                    <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-amber-500 to-amber-600 rounded-full w-[94%]" />
                    </div>
                    <div className="p-3 bg-slate-800/50 rounded-xl border border-slate-800 text-xs text-slate-300 leading-relaxed">
                      Entrenamiento intensivo en oratoria, entrevistas televisivas y preparación para asambleas de inversionistas.
                    </div>
                  </div>
                )}

                {activeTab === 'sostenibilidad' && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-400">Retorno Social de Inversión (SROI)</span>
                      <span className="text-amber-400 font-mono font-bold">4.2x Retorno</span>
                    </div>
                    <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-amber-500 to-amber-600 rounded-full w-[82%]" />
                    </div>
                    <div className="p-3 bg-slate-800/50 rounded-xl border border-slate-800 text-xs text-slate-300 leading-relaxed">
                      Articulación de programas de Creación de Valor Compartido (CSV) que integran comunidades, empleados y negocio.
                    </div>
                  </div>
                )}

                {/* Sub-metrics inside mockup */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 bg-slate-800/40 rounded-xl border border-slate-800/80">
                    <div className="text-[11px] text-slate-400">Alcance de Audiencia</div>
                    <div className="text-base font-bold text-white font-mono mt-0.5">
                      +2.4M Lectores
                    </div>
                    <div className="text-[10px] text-emerald-400 flex items-center gap-1 mt-1 font-medium">
                      <TrendingUp className="w-3 h-3" />
                      Medios especializados
                    </div>
                  </div>

                  <div className="p-3 bg-slate-800/40 rounded-xl border border-slate-800/80">
                    <div className="text-[11px] text-slate-400">Índice Reputacional</div>
                    <div className="text-base font-bold text-white font-mono mt-0.5">
                      9.8 / 10
                    </div>
                    <div className="text-[10px] text-amber-400 flex items-center gap-1 mt-1 font-medium">
                      <Sparkles className="w-3 h-3" />
                      Auditoría internacional
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom tag in mockup */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-amber-400" />
                  Presencia en LATAM & Europa
                </span>
                <span className="text-[11px] text-amber-500 font-medium">
                  Fala Executive Protocol
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Below main hero block: 3 highlighted quick bullet points / minimalist cards */}
        <div className="mt-14 pt-8 border-t border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Quick point 1 */}
            <div className="p-5 rounded-xl bg-white border border-slate-200/80 hover:border-amber-300 hover:shadow-sm transition-all group">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-amber-800 transition-colors">
                    Posicionamiento & RRPP
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Construcción de reputación y blindaje de marca en entornos corporativos de alta exigencia.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick point 2 */}
            <div className="p-5 rounded-xl bg-white border border-slate-200/80 hover:border-amber-300 hover:shadow-sm transition-all group">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                  <Mic className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-amber-800 transition-colors">
                    Vocería Ejecutiva
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Capacitación integral para líderes corporativos ante medios, inversores y paneles de industria.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick point 3 */}
            <div className="p-5 rounded-xl bg-white border border-slate-200/80 hover:border-amber-300 hover:shadow-sm transition-all group">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-amber-800 transition-colors">
                    Valor Compartido & Engagement
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Estrategias de sostenibilidad (CSR) y cultura interna que fidelizan al talento y generan impacto real.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
